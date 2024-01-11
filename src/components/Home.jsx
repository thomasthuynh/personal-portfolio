import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsMouse } from "react-icons/bs";

const Home = () => {
  return (
    <header name="home" className="relative h-screen w-full bg-primary">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.25, duration: 1 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 100, y: 0 },
          }}
        >
          <p className="font-semibold text-white lg:text-lg">
            Hi, nice to meet you{" "}
            <span className="inline-block animate-wave text-xl lg:text-2xl">
              👋
            </span>
          </p>
          <h1 className="py-2 text-4xl font-bold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            I'm <span className="text-secondary">Thomas</span>
          </h1>
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 0.75 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 100, y: 0 },
          }}
          className="text-4xl font-bold text-gray sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          A Front End Developer
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.75, duration: 0.75 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 100, y: 0 },
          }}
          className="pb-4 pt-6 text-gray lg:text-lg"
        >
          I'm a front-end developer specializing in building responsive and
          interactive web applications. Currently, I'm focused on building a
          variety of front-end based projects while learning back-end
          technologies.
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 1, duration: 0.75 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 100, y: 0 },
          }}
          className="flex gap-2 pb-4 text-white xl:hidden"
        >
          <li>
            <a
              href="https://www.linkedin.com/in/thomasthuynh/"
              target="_blank"
              className="flex p-2 duration-150 hover:scale-110 hover:text-secondary"
            >
              <FaLinkedinIn size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thomasthuynh"
              target="_blank"
              className="flex p-2 duration-150 hover:scale-110 hover:text-secondary"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto:thomas_tth@live.com"
              target="_blank"
              className="flex p-2 duration-150 hover:scale-110 hover:text-secondary"
            >
              <HiOutlineMail size={20} />
            </a>
          </li>
          <li>
            <a
              href="/src/assets/thomas-huynh-resume.pdf"
              target="_blank"
              className="flex p-2 duration-150 hover:scale-110 hover:text-secondary"
            >
              <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </motion.ul>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="absolute bottom-8 animate-scroll text-white duration-300 hover:text-secondary"
        >
          <BsMouse size={30} />
        </Link>
      </div>

      <div className="fixed bottom-1/2 left-0 hidden translate-y-1/2 xl:flex">
        <ul className="flex flex-col text-white">
          <li>
            <a
              href="https://www.linkedin.com/in/thomasthuynh/"
              target="_blank"
              className="flex translate-x-[-75px] justify-between p-4 text-white duration-300 hover:translate-x-0 hover:text-secondary"
            >
              <p>LinkedIn</p>
              <span className="ml-4">
                <FaLinkedinIn size={25} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thomasthuynh"
              target="_blank"
              className="flex translate-x-[-75px] justify-between p-4 text-white duration-300 hover:translate-x-0 hover:text-secondary"
            >
              <p>Github</p>
              <span className="ml-4">
                <FaGithub size={25} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:thomas_tth@live.com"
              className="flex translate-x-[-75px] justify-between p-4 text-white duration-300 hover:translate-x-0 hover:text-secondary"
            >
              <p>Email</p>
              <span className="ml-4">
                <HiOutlineMail size={25} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="/src/assets/thomas-huynh-resume.pdf"
              target="_blank"
              className="flex translate-x-[-75px] justify-between p-4 text-white duration-300 hover:translate-x-0 hover:text-secondary"
            >
              <p>Resume</p>
              <span className="ml-4">
                <BsFillPersonLinesFill size={25} />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Home;
