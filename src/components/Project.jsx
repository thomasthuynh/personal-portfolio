import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ name, image, languages, description, github, live }) => {
  return (
    <div className="group relative mb-8 overflow-hidden rounded md:mb-16">
      <img
        src={image}
        alt={name}
        className="duration-300 group-hover:scale-105 group-hover:blur-sm"
      />

      <div className="absolute top-0 flex h-full w-full translate-y-full items-center duration-300 group-hover:translate-y-0">
        <div className="absolute h-full w-full bg-black opacity-80"></div>
        <div className="z-10 mx-auto w-[80%] lg:w-[70%]">
          <h3 className="text-2xl md:text-3xl">{name}</h3>
          <p className="py-2 text-sm xs:text-base sm:pb-3">{languages}</p>
          <p className="hidden sm:flex">{description}</p>
          <div className="flex gap-4 pt-2 text-xs xs:text-sm sm:pt-4 sm:text-base md:gap-5">
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2 duration-150 hover:opacity-80 xs:gap-3"
            >
              <p className="font-semibold uppercase">View Code</p>
              <FaGithub size={25} className="scale-90 xs:scale-100" />
            </a>
            <a
              href={live}
              target="_blank"
              className="flex items-center gap-2 duration-150 hover:opacity-80 xs:gap-3"
            >
              <p className="font-semibold uppercase">Live Demo</p>
              <FaExternalLinkAlt size={25} className="scale-90 xs:scale-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
