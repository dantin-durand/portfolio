"use client";
import "aos/dist/aos.css";
import CodeEditor from "@/components/CodeEditor";
import Welcome from "@/components/Welcome";
import { Fragment, useEffect, useRef, useState } from "react";
import AOS from "aos";
import IntroductionSection from "@/components/sections/Introduction";
import StackSection from "@/components/sections/Stack";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function Home() {
  const [renderInClientSide, setRenderInClientSide] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setIsWelcomeOpen(true);
      const section = document.querySelector(hash);

      if (section) {
        document.body.style.overflow = "auto";
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    AOS.init();
    setRenderInClientSide(true);
  }, []);

  return (
    <Fragment>
      <Welcome
        isVisible={!isWelcomeOpen}
        onOpen={() => setIsWelcomeOpen(true)}
      />
      <main className="h-screen flex relative">
        {renderInClientSide && <CodeEditor pageRef={pageRef} />}
        <div className="flex-1 h-fit" ref={pageRef}>
          <Navbar />
          <IntroductionSection isLoad={isWelcomeOpen} />
          <StackSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </Fragment>
  );
}

export default Home;
