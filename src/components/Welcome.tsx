"use client";
import { useEffect, useRef, useState } from "react";
import joinClasses from "@/helpers/joinClasses";

export default function Welcome({
  isVisible,
  onOpen,
}: {
  isVisible: boolean;
  onOpen: () => void;
}) {
  const [isStarted, setIsStarted] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleShowWebsite = () => {
    window.scrollTo(0, 0);
    if (isStarted) return;
    setIsStarted(true);
    const text = "cd portfolio && code .";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        textRef.current!.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsHide(true);
          setTimeout(() => {
            onOpen();
            document.body.style.overflow = "auto";
            textRef.current!.textContent = "";
          }, 500);
        }, 200);
      }
    }, 100);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <header
      className={joinClasses(
        "h-screen bg-slate-900 fixed text-white w-full flex flex-col justify-center items-center z-20",
        isHide || !isVisible
          ? "-translate-y-full transition-all duration-500"
          : "translate-y-0"
      )}
    >
      <div
        className={joinClasses(
          "-mt-[150px] flex flex-col items-center gap-10 ",
          isStarted
            ? "opacity-0 transition-all duration-200 ease-in-out"
            : "opacity-100"
        )}
      >
        <h1 className="text-4xl md:text-6xl text-center font-monserrat font-bold pt-20 leading-tight">
          Bienvenue sur
          <br />
          <span className="text-primary">mon portfolio</span>
        </h1>
        <button
          className={joinClasses(
            "bg-slate-700 px-10 py-3 rounded-full uppercase text-white font-bold text-sm md:text-md hover:bg-slate-800",
            isStarted ? "cursor-progress" : "cursor-pointer"
          )}
          onClick={handleShowWebsite}
        >
          Découvrir
        </button>
      </div>

      <div className="text-[3vw] md:text-base font-mono flex items-center absolute bottom-28 md:bottom-5 left-5 max-w-screen overflow-hidden">
        <span className="text-green-500 whitespace-pre">
          dantin-durand@portfolio:
        </span>
        <span className="text-slate-500 pr-2">~$</span>
        <span className="text-slate-400 whitespace-pre" ref={textRef}></span>
        <div className="cursor-text bg-white"></div>
      </div>
    </header>
  );
}
