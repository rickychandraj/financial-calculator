"use client";

import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Tools from "@/components/Tools";

export default function Home() {
  return (
      <div className="calculator-home">
          <main className="calculator-shell">
              <Header/>
              <Tools/>
              <Footer/>
          </main>
      </div>
  );
}
