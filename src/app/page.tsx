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

function Home() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Welcome onOpen={() => setIsWelcomeOpen(true)} />
      <main className="h-screen flex relative">
        <CodeEditor pageRef={pageRef} />
        <div className="flex-1 h-fit" ref={pageRef}>
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
