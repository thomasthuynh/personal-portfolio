import { Link } from "react-scroll";
import { motion, useScroll } from "framer-motion";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsMouse } from "react-icons/bs";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <header name="home" className="relative h-screen w-full bg-primary">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 2.25, duration: 1 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 100, x: 0 },
          }}
        >
          <p className="font-semibold text-white lg:text-lg">
            Hi, nice to meet you{" "}
            <span className="inline-block animate-wave text-xl lg:text-2xl">
              👋
            </span>
          </p>
          <h1 className="py-2 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            I'm <span className="text-secondary">Thomas.</span>
          </h1>
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 2.5, duration: 0.75 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 100, x: 0 },
          }}
          className="text-4xl font-semibold text-gray sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          A Full Stack Developer.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 2.75, duration: 0.75 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 100, x: 0 },
          }}
          className="w-full pb-4 pt-6 text-gray md:w-4/5 lg:text-lg"
        >
          I specialize in developing (and occasionally designing) responsive web
          applications. I build and enhance a wide range of projects, utilizing
          a variety of both front-end and back-end technologies.
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 3, duration: 0.75 }}
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
              href="/thomas-huynh-resume.pdf"
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
          className="absolute bottom-8 left-1/2 block animate-scroll text-white hover:text-secondary"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 3.75, duration: 0.5 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 100, y: 0 },
            }}
          >
            <BsMouse size={30} />
          </motion.div>
        </Link>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 2.25, duration: 0.5 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: -20, rotate: 90 },
          visible: { opacity: 100, y: 0, rotate: 90 },
        }}
        className="fixed left-4 top-[140px] z-50 origin-bottom-left rotate-90 font-semibold uppercase tracking-widest text-white hidden xl:flex"
      >
        <p>Version 1.2</p>
      </motion.div>

      <div className="fixed bottom-1/2 left-0 hidden translate-y-1/2 xl:flex">
        <ul className="flex flex-col font-semibold uppercase text-white">
          <motion.li
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 2.5, duration: 0.5 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 100, y: 0 },
            }}
          >
            <a
              href="https://www.linkedin.com/in/thomasthuynh/"
              target="_blank"
              className="flex translate-x-[-95px] items-center justify-between p-4 tracking-wider text-white duration-300 hover:translate-x-0 hover:text-secondary"
            >
              <p>LinkedIn</p>
              <span className="ml-4">
                <FaLinkedinIn size={25} />
              </span>
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 2.75, duration: 0.5 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 100, y: 0 },
            }}
          >
            <a
              href="https://github.com/thomasthuynh"
              target="_blank"
              className="flex translate-x-[-95px] items-center justify-between p-4 tracking-wider text-white duration-300 hover:translate-x-0 hover:text-secondary"
            >
              <p>Github</p>
              <span className="ml-4">
                <FaGithub size={25} />
              </span>
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 3, duration: 0.5 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 100, y: 0 },
            }}
          >
            <a
              href="mailto:thomas_tth@live.com"
              className="flex translate-x-[-95px] items-center justify-between p-4 tracking-wider text-white duration-300 hover:translate-x-0 hover:text-secondary"
            >
              <p>Email</p>
              <span className="ml-4">
                <HiOutlineMail size={25} />
              </span>
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 3.25, duration: 0.5 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 100, y: 0 },
            }}
          >
            <a
              href="/thomas-huynh-resume.pdf"
              target="_blank"
              className="flex translate-x-[-95px] items-center justify-between p-4 tracking-wider text-white duration-300 hover:translate-x-0 hover:text-secondary"
            >
              <p>Resume</p>
              <span className="ml-4">
                <BsFillPersonLinesFill size={25} />
              </span>
            </a>
          </motion.li>
        </ul>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 3.5, duration: 0.5 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 100, y: 0 },
        }}
        className="fixed bottom-14 left-5 hidden h-1/4 w-1 origin-top bg-gray xl:flex"
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 3.5, duration: 0.5 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 100, y: 0 },
        }}
        className="fixed bottom-14 left-5 hidden h-1/4 w-1 origin-top bg-secondary xl:flex"
        style={{ scaleY: scrollYProgress }}
      ></motion.div>
    </header>
  );
};

export default Home;
