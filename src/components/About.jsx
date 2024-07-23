import { motion } from "framer-motion";

const About = () => {
  return (
    <section name="about" className="h-screen w-full bg-primary">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col items-center justify-center text-white">
        <h2
          className="pb-12 text-center text-4xl font-bold"
        >
          About <span className="text-secondary">Me</span>
        </h2>

        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <p
              className="text-3xl font-bold md:text-right md:text-4xl"
            >
              Hey, thanks for dropping by! Please feel free to look around.
              Here's a bit more about me.
            </p>
          </div>

          <div>
            <p
              className="text-gray lg:text-lg"
            >
              I'm a developer with a background in data management. My
              experience helps me blend complex data with user-friendly designs.
              Whether you're looking to build an interactive e-commerce site or
              streamline your business processes, I'm here to bring your ideas
              to life, ensuring each solution is perfectly tailored to your
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
