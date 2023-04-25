import joinClasses from "@/helpers/joinClasses";
import { useEffect, useState } from "react";
import GithubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedInIcon from "../icons/LinkedIn";

export default function IntroductionSection({ isLoad = false }) {
  return (
    <section
      className="md:min-h-screen flex flex-col md:justify-center"
      id="about"
    >
      <div
        className={joinClasses(
          "px-5 md:px-20 transition-all duration-500",
          isLoad ? "opacity-100" : "opacity-0"
        )}
      >
        <h1 className="text-3xl md:text-6xl font-monserrat font-bold pt-20 leading-tight text-primary">
          Développeur fullstack
        </h1>

        <p className="text-sm md:text-lg font-monserrat font-light text-secondary mt-5 md:mt-11 max-w-2xl">
          Je m’appelle Dantin, et je suis un étudiant en Master de Management et
          Développement Full-Stack 💻🎓. Fasciné par l’univers de la technologie
          🌐, ma passion pour le développement web et mobile 📱💻 a commencé dès
          l’âge de 14 ans. Autodidacte dans un premier temps 🤓, j’ai ensuite
          suivi une formation en webdesign 🎨 pour renforcer mes compétences.
          Aujourd’hui, je mets tout mon enthousiasme et mon expertise au service
          de projets innovants dans le domaine du web et du mobile 🚀.
        </p>

        <div className="flex gap-8 text-blue_accent mt-10">
          <a
            href="https://github.com/dantin-durand"
            className="hover:scale-110 transform transition-all duration-500"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/dantin.durand/"
            className="hover:scale-110 transform transition-all duration-500"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/dantindurand/"
            className="hover:scale-110 transform transition-all duration-500"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="mt-10 md:mt-24 pt-5 overflow-auto max-w-[100vw]">
        <div
          className={joinClasses(
            "h-1 bg-primary transition-all duration-[2000ms] min-w-[1000px] md:min-w-0",
            isLoad ? "w-full" : "w-0"
          )}
        />
        {/* div avec une grid de 3 colonnes */}
        <div className="grid grid-cols-3 gap-10 px-20 -mt-3 min-w-[1000px] md:min-w-0">
          <div
            className={joinClasses(
              "transition-all duration-500",
              isLoad ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="w-6 h-6 bg-primary rounded-full" />
            <h2 className="text-3xl text-primary font-bold mt-3">2020</h2>
            <h4 className="text-lg text-secondary font-bold">
              Formation en webdesign
            </h4>
            <a
              className="text-sm text-gray-500 font-light mb-2"
              href="http://www.mjm-design.com/formation/webdesign"
              target="_blank"
            >
              MJM Graphic Design
            </a>
            <ul className="text-sm flex flex-col gap-1">
              <li>UX/UI</li>
              <li>Motion design</li>
              <li>HTML/CSS/JS</li>
            </ul>
          </div>
          <div
            className={joinClasses(
              "transition-all duration-500 delay-500",
              isLoad ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="w-6 h-6 bg-primary rounded-full" />
            <h2 className="text-3xl text-primary font-bold mt-3">2022</h2>
            <h4 className="text-lg text-secondary font-bold">
              Bachelor développement Web et Mobile
            </h4>
            <a
              className="text-sm text-gray-500 font-light mb-2"
              href="https://ecole-webstart.com/formation-developpement-web-et-mobile/"
              target="_blank"
            >
              Webstart (accès direct en 2ème année)
            </a>
            <ul className="text-sm flex flex-col gap-1">
              <li>Laravel</li>
              <li>VueJS & ReactJS</li>
              <li>NodeJS</li>
              <li>Java, Swift, React Native</li>
            </ul>
          </div>
          <div
            className={joinClasses(
              "transition-all duration-500 delay-1000",
              isLoad ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="w-6 h-6 bg-primary rounded-full" />
            <h2 className="text-3xl text-primary font-bold mt-3">2023</h2>
            <h4 className="text-lg text-secondary font-bold">
              Master dev manager Full-Stack
            </h4>
            <a
              className="text-sm text-gray-500 font-light mb-2"
              href="https://www.efrei.fr/programmes-experts/mastere-developpeur-full-stack/"
              target="_blank"
            >
              Efrei Paris
            </a>
            <ul className="text-sm flex flex-col gap-1">
              <li>GraphQL</li>
              <li>NestJS</li>
              <li>DevOps</li>
              <li>Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
