"use client";

import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Tools from "@/components/Tools";

export default function Home() {
  return (
      <div className="w-full min-h-screen">
          <main className="flÏex flex-col" style={{
              fontFamily: "system-ui, sans-serif",
              backgroundColor: "#F9FAFB",

          }}>
              <Header/>
              <Tools/>
              <Footer/>
          </main>
      </div>
  );
}
