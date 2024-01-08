import React from "react";

const About = () => {
  return (
    <section className="bg-primary h-screen w-full">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col justify-center text-white">
        <h2 className="pb-12 text-center text-4xl font-bold">
          About <span className="text-neon">Me</span>
        </h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <div>
            <p className="text-3xl md:text-4xl font-bold md:text-right">
              Hi. I'm Thomas, nice to meet you. Please take a look around.
            </p>
          </div>

          <div>
            <p className="text-gray lg:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              minus necessitatibus numquam dignissimos molestiae explicabo
              quisquam, sit pariatur vel consectetur nulla sed, quod suscipit
              cum? Nobis est, molestias blanditiis enim ducimus non quibusdam
              molestiae tenetur ab libero illo?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
