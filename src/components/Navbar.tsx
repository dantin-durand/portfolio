import joinClasses from "@/helpers/joinClasses";
import { useEffect, useState } from "react";
import { CloseIcon } from "./icons/Close";
import ReactIcon from "./icons/React";

export default function Navbar() {
  const [activeElement, setActiveElement] = useState(0);
  const menu = [
    {
      name: "Presentation.tsx",
      href: "#about",
    },
    {
      name: "Stack.tsx",
      href: "#stack",
    },
    {
      name: "Projets.tsx",
      href: "#projects",
    },
    {
      name: "Contact.tsx",
      href: "#contact",
    },
  ];

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.pageYOffset;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveElement(index);
      }
    });

    if (scrollPosition === 0) {
      setActiveElement(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-[#21222B] fixed w-full z-10 overflow-auto">
      <ul className="flex items-center text-[#6572A0]">
        {menu.map((item, index) => (
          <a
            href={item.href}
            key={index}
            onClick={() => setActiveElement(index)}
          >
            <li
              className={joinClasses(
                "px-6 py-3 pr-2 flex items-center gap-3 border-r border-[#191A20] group",
                activeElement === index ? "text-white" : ""
              )}
            >
              <ReactIcon />
              <span>{item.name}</span>
              <CloseIcon
                className={joinClasses(
                  "text-lg group-hover:opacity-100 opacity-0",
                  activeElement === index ? "opacity-100" : ""
                )}
              />
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
