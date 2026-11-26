"""Check the calculator risk CTA actually reaches question 1, without submitting data.

python scripts/check-risk-test-link.py http://127.0.0.1:4311/
"""
import glob
import sys
from playwright.sync_api import sync_playwright, expect

base = sys.argv[1] if len(sys.argv) > 1 else 'https://calculator.mamaberuang.com/'
expected_url = 'https://beruang-global.com/risk-profil-test/quiz'
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=glob.glob('/root/.cache/ms-playwright/chromium-*/chrome-linux64/chrome')[0], args=['--no-sandbox'])
    try:
        for width in [1440, 390]:
            context = browser.new_context(viewport={'width': width, 'height': 1000})
            page = context.new_page()
            errors, writes = [], []
            page.on('pageerror', lambda error: errors.append(str(error)))

            def read_only(route):
                if route.request.method not in ['GET', 'HEAD']:
                    writes.append(route.request.url)
                    return route.abort()
                return route.continue_()

            page.route('**/*', read_only)
            page.goto(base, wait_until='domcontentloaded', timeout=60000)
            button = page.locator('.home-risk-copy a')
            expect(button).to_have_attribute('href', expected_url)
            button.scroll_into_view_if_needed()
            button.click()
            page.wait_for_url(expected_url, timeout=60000)
            expect(page.locator('.rq-question-number')).to_have_text('Pertanyaan 1')
            expect(page.locator('.rq-option')).to_have_count(4)
            assert not errors, errors
            assert not writes, writes
            print(f'PASS {width}px: risk CTA → {page.url} → question 1 / four answers; no runtime errors or writes')
            context.close()
    finally:
        browser.close()
