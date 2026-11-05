import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import Tools from "@/components/Tools";
import RiskProfile from "@/components/RiskProfile";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
      <div className="home-page">
          <Header/>
          <main>
              <Hero/>
              <Tools/>
              <RiskProfile/>
          </main>
          <Footer/>
      </div>
  );
}
