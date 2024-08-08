const Project = ({ name, image, languages, description, github, live, no }) => {
  return (
    <div className="grid justify-between md:grid-cols-[40%_55%]">
      {/* PROJECT TITLE AND DESCRIPTION */}
      <div className="flex flex-col items-center justify-center md:items-start">
        <h3 className="text-center text-3xl lg:text-left">
          <span className="text-secondary">{no}. </span>
          {name}
        </h3>
        <p className="py-4 text-gray">{description}</p>
        {/* LANGUAGES USED */}
        <div className="flex justify-center gap-4 py-2 lg:justify-start">
          {languages.map((language, i) => (
            <div key={i} className="h-8 w-8">
              <img src={language.icon} alt={language.name} />
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT IMAGE */}
      <div className="mt-8 hover:opacity-90 transition">
        <a href={live} target="_blank">
          <img src={image} alt={name} />
        </a>
      </div>
    </div>
  );
};

export default Project;
