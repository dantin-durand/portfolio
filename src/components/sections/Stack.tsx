import Image from "next/image";
import TechnicalStack from "../icons/Stack";

export default function StackSection() {
  return (
    <section
      className="px-5 md:px-20 flex flex-col justify-center min-h-[70vh]"
      id="stack"
    >
      <h1
        className="text-3xl md:text-6xl font-monserrat font-bold pt-20 leading-tight text-green_accent"
        data-aos="fade-up"
      >
        Ma stack technique
      </h1>
      <div
        className="flex flex-col-reverse md:flex-row gap-5 md:gap-20 items-start mt-11"
        data-aos="fade-up"
      >
        <div>
          <p className="text-sm md:text-lg font-monserrat font-light text-secondary max-w-lg mb-5">
            Pour l’ensemble de mes projets, j’adopte une approche atomic 🧪 de
            mes composants, combinée à une organisation par feature ⚙️, afin de
            garantir une meilleure scalabilité à long terme et une gestion
            optimisée en équipe 👥. De plus, je mets en place des tests E2E 🧪🔁
            et une documentation Storybook 📖 pour assurer la qualité et la
            maintenabilité du code.
          </p>
          <a
            href="https://github.com/dantin-durand/reactjs-boilerplate"
            className="bg-[#494C5D] text-white px-8 py-3 rounded-full mt-5 inline-block hover:opacity-80"
          >
            Mon Boilerplate
          </a>
        </div>
        <div>
          <Image src="/assets/stack.svg" alt="stack" width={400} height={400} />
        </div>
        {/* <TechnicalStack /> */}
      </div>
    </section>
  );
}
