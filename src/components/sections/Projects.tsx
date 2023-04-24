import joinClasses from "@/helpers/joinClasses";
import Image from "next/image";
import projects from "@/data/projects.json";

export default function ProjectsSection() {
  return (
    <section
      className="px-5 md:px-20 min-h-screen flex flex-col justify-center overflow-hidden"
      id="projects"
    >
      <h1
        className="text-3xl md:text-6xl font-monserrat font-bold pt-20 leading-tight text-blue_accent"
        data-aos="fade-up"
      >
        Mes réalisations
      </h1>
      {projects.map((project, index) => (
        <div
          className={joinClasses(
            "flex gap-10 items-center my-10 md:my-20 min-h-[300px]",
            index % 2 === 0
              ? "flex-col md:flex-row"
              : "flex-col md:flex-row-reverse justify-end"
          )}
          key={index}
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        >
          <div className="w-full md:w-1/3 h-[200px] md:h-[300px] relative">
            <Image
              src={project.image}
              alt="comhype"
              className="object-contain"
              fill
            />
          </div>
          <div>
            <h2 className="text-3xl text-primary font-bold">{project.name}</h2>
            <div className="mt-3 flex gap-3 flex-wrap">
              {project.labels.map((label, index) => (
                <span
                  className="text-green_accent text-sm border border-green_accent px-2.5 py-0.5 rounded-full"
                  key={index}
                >
                  {label}
                </span>
              ))}
            </div>
            <p
              className="text-base md:text-lg font-monserrat font-light text-secondary max-w-lg mb-5 mt-5"
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></p>

            <div className="flex gap-3">
              {project.buttons.map((button, index) => (
                <a
                  href={button.url}
                  className="bg-blue_accent text-black px-8 py-3 rounded-full mt-5 inline-block hover:opacity-80"
                  key={index}
                  target="_blank"
                >
                  {button.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
