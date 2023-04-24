import React, { useEffect, useState } from "react";

const CodeEditor = ({
  pageRef,
}: {
  pageRef: React.RefObject<HTMLDivElement>;
}) => {
  const [lines, setLines] = useState(0);
  const addLineNumbers = () => {
    const documentHeight = pageRef.current?.clientHeight || 0;
    const lineHeight = 24;

    setLines(Math.floor(documentHeight / lineHeight));
  };

  useEffect(() => {
    addLineNumbers();
    window.addEventListener("resize", addLineNumbers);

    return () => {
      window.removeEventListener("resize", addLineNumbers);
    };
  }, []);

  return (
    <ul className="hidden md:block font-mono opacity-25 pl-2 pr-5 text-right border-r py-2 h-fit">
      {Array.from(Array(lines).keys()).map((line) => (
        <li
          key={line}
          className="flex items-center gap-3 group cursor-default justify-end w-full"
        >
          <div className="hidden md:block w-3 h-3 bg-slate-600 rounded-full opacity-0 group-hover:opacity-100"></div>
          {line + 1}
        </li>
      ))}
    </ul>
  );
};

export default CodeEditor;
