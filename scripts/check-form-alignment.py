"""Run against `npm start`; requires Python Playwright and Chromium."""
import json
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

base = os.environ.get("TEST_BASE_URL", "http://127.0.0.1:3126")
routes = sorted(p.name for p in (Path(__file__).resolve().parents[1] / "src/app/forms").iterdir() if p.is_dir())
results = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path=os.environ.get("CHROMIUM_PATH"))
    page = browser.new_page()

    def check(route, width, state):
        page.evaluate("document.fonts.ready")
        page.evaluate("new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))")
        sizes = page.evaluate("""() => {
            const header = document.querySelector('.calculator-form-header');
            const card = header.nextElementSibling.firstElementChild;
            const h = header.getBoundingClientRect(), c = card.getBoundingClientRect();
            return {left: h.left - c.left, right: h.right - c.right,
                    scrollWidth: document.documentElement.scrollWidth};
        }""")
        assert abs(sizes["left"]) < 1 and abs(sizes["right"]) < 1, (route, width, state, sizes)
        assert sizes["scrollWidth"] <= width, (route, width, state, sizes)
        results.append({"route": route, "width": width, "state": state, **sizes})

    for route in routes:
        for width in (1440, 920, 390, 320):
            page.set_viewport_size({"width": width, "height": 1000})
            response = page.goto(f"{base}/forms/{route}", wait_until="networkidle")
            assert response is not None
            assert response.status == 200, (route, response.status)
            page.locator('.calculator-form-header').wait_for()
            check(route, width, "initial")
            acknowledge = page.get_by_role("button", name="Baik, saya mengerti")
            if acknowledge.is_visible():
                acknowledge.click()
                check(route, width, "question")
            if route == "education-fund" and width in (1440, 390) and os.environ.get("SCREENSHOT_DIR"):
                output = Path(os.environ["SCREENSHOT_DIR"])
                output.mkdir(parents=True, exist_ok=True)
                page.screenshot(path=str(output / f"calculator-aligned-{width}.png"), full_page=True)
    browser.close()
assert len([r for r in results if r["state"] == "initial"]) == len(routes) * 4
print(json.dumps({"routes": len(routes), "checks": len(results), "results": results}))
