import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ name, image, languages, description, github, live }) => {
  return (
    <div className="group relative mb-8 overflow-hidden rounded-lg md:mb-16">
      <img
        src={image}
        alt={name}
        className="duration-300 group-hover:scale-105 group-hover:blur-sm"
      />

      <div className="absolute top-0 flex h-full w-full translate-y-full items-center duration-300 group-hover:translate-y-0">
        <div className="absolute h-full w-full bg-black opacity-80"></div>
        <div className="z-10 mx-auto w-[80%] lg:w-[70%]">
          <h3 className="text-2xl md:text-3xl">{name}</h3>
          <p className="xs:text-base py-2 text-sm sm:pb-4">{languages}</p>
          <p className="hidden sm:flex">{description}</p>
          <div className="flex gap-6 pt-2 sm:pt-6">
            <a href={github} target="_blank" className="hover:opacity-80">
              <FaGithub size={25} className="xs:scale-100 scale-90" />
            </a>
            <a href={live} target="_blank" className="hover:opacity-80">
              <FaExternalLinkAlt size={25} className="xs:scale-100 scale-90" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
