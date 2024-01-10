const About = () => {
  return (
    <section name="about" className="bg-primary h-screen w-full">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col items-center justify-center text-white">
        <h2 className="pb-12 text-center text-4xl font-bold">
          About <span className="text-secondary">Me</span>
        </h2>

        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <p className="text-3xl font-bold md:text-right md:text-4xl">
              Hey, thanks for dropping by! Please feel free to look around.
              Here's a bit more about me.
            </p>
          </div>

          <div>
            <p className="text-gray lg:text-lg">
              I'm a Front End Developer with a chemical engineering background.
              I initially worked in the pharmaceutical industry focusing on
              regulatory compliance and data management before diving into tech.
              My journey's all about mixing analytical skills with digital
              creativity. I'm passionate about building user-friendly websites
              that not only look great but make life easier. Let's build
              something awesome together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
