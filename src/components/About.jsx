import { motion } from "framer-motion";

const About = () => {
  return (
    <section name="about" className="h-screen w-full bg-primary">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col items-center justify-center text-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 100, y: 0 },
          }}
          className="pb-12 text-center text-4xl font-bold"
        >
          About <span className="text-secondary">Me</span>
        </motion.h2>

        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 100, x: 0 },
              }}
              className="text-3xl font-bold md:text-right md:text-4xl"
            >
              Hey, thanks for dropping by! Please feel free to look around.
              Here's a bit more about me.
            </motion.p>
          </div>

          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 100, x: 0 },
              }}
              className="text-gray lg:text-lg"
            >
              I'm a developer with a background in data management. My
              experience helps me blend complex data with user-friendly designs.
              Whether you're looking to build an interactive e-commerce site or
              streamline your business processes, I'm here to bring your ideas
              to life, ensuring each solution is perfectly tailored to your
              needs.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
