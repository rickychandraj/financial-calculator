import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import Tools from "@/components/Tools";
import RiskProfile from "@/components/RiskProfile";
import {Footer} from "@/components/Footer";
import {LanguageProvider} from "@/lib/i18n";
import {LANG_BOOT_SCRIPT} from "@/lib/i18n/boot";

export default function Home() {
  return (
      <LanguageProvider>
          {/* Runs before first paint so returning English visitors don't see the Indonesian prerender flash. */}
          <script dangerouslySetInnerHTML={{__html: LANG_BOOT_SCRIPT}}/>
          <div className="home-page">
              <Header/>
              <main>
                  <Hero/>
                  <Tools/>
                  <RiskProfile/>
              </main>
              <Footer/>
          </div>
      </LanguageProvider>
  );
}
