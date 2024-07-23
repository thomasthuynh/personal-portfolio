import { Link } from "react-scroll";
import { motion, useScroll } from "framer-motion";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsMouse } from "react-icons/bs";

const Title = ({ children, color, delay }) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
    >
      {children.split("").map((l, i) => (
        <motion.span
          key={i}
          initial="initial"
          animate="animate"
          transition={{ delay: delay + 0.025 * i, duration: 0.5 }}
          variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
          className={`inline-block ${color}`}
        >
          {l === " " ? "\u00A0" : l}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <header name="home" className="relative h-screen w-full bg-primary">
      <div className="mx-auto flex h-full w-[90%] flex-col justify-center xl:max-w-5xl">
        <motion.div className="relative overflow-hidden font-medium text-white lg:text-xl">
          <motion.p
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
          >
            Hey, nice to meet you.
          </motion.p>
        </motion.div>

        <div className="-mb-2 flex py-2 text-4xl font-medium xs:mb-0 sm:text-5xl lg:text-6xl xl:text-7xl">
          <div className="relative flex overflow-hidden">
            <Title color={"text-white"} delay={0.5}>
              I'm&nbsp;
            </Title>
            <Title color={"text-secondary"} delay={0.5}>
              Thomas.
            </Title>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row">
          <div className="relative -mb-4 overflow-hidden py-2 text-4xl font-medium xs:mb-0 sm:text-5xl lg:text-6xl xl:text-7xl">
            <Title color={"text-white"} delay={0.675}>
              A Web&nbsp;
            </Title>
          </div>

          <div className="relative overflow-hidden py-2 text-4xl font-medium sm:text-5xl lg:text-6xl xl:text-7xl">
            <Title color={"text-white"} delay={0.825}>
              Developer.
            </Title>
          </div>
        </div>

        <motion.div className="relative overflow-hidden">
          <motion.p
            initial="initial"
            animate="animate"
            transition={{ delay: 1, duration: 0.5 }}
            variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
            className="w-full py-4 text-gray md:w-4/5 lg:text-lg"
          >
            I specialize in developing and designing responsive
            web applications utilizing a variety of front-end and back-end technologies.
          </motion.p>
        </motion.div>

        {/* MOBILE LINKS */}
        <motion.ul
          initial="hidden"
          animate="animate"
          transition={{ delay: 1.25, duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            animate: { opacity: 100, y: 0 },
          }}
          className="flex gap-2 pb-4 text-white xl:hidden"
        >
          <li>
            <a
              href="https://www.linkedin.com/in/thomasthuynh/"
              target="_blank"
              className="flex p-2 pl-0 duration-150 hover:scale-110 hover:text-secondary"
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
          {/* <li>
            <a
              href="/thomas-huynh-resume.pdf"
              target="_blank"
              className="flex p-2 duration-150 hover:scale-110 hover:text-secondary"
            >
              <BsFillPersonLinesFill size={20} />
            </a>
          </li> */}
        </motion.ul>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.25, duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            hidden: {
              opacity: 0,
              scaleY: 0,
            },
            visible: {
              opacity: 100,
              scaleY: 1,
            },
          }}
          className="fixed bottom-14 left-5 hidden h-1/4 w-1 origin-center bg-gray xl:flex"
        ></motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0, duration: 0.5 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, rotate: 90 },
          visible: { opacity: 100, rotate: 90 },
        }}
        className="fixed left-4 top-[140px] hidden origin-bottom-left rotate-90 font-semibold uppercase tracking-widest text-white xl:flex"
      >
        <p>Version 1.2</p>
      </motion.div>

      <div className="fixed bottom-1/2 left-0 z-20 hidden translate-y-1/2 xl:flex">
        <ul className="flex flex-col font-semibold uppercase text-white">
          <motion.li
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25, duration: 0.5 }}
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
            animate="visible"
            transition={{ delay: 0.5, duration: 0.5 }}
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
            animate="visible"
            transition={{ delay: 0.75, duration: 0.5 }}
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
          {/* <motion.li
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, duration: 0.5 }}
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
          </motion.li> */}
        </ul>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 0.5 }}
        viewport={{ once: true }}
        variants={{
          hidden: {
            opacity: 0,
            scaleY: 0,
          },
          visible: {
            opacity: 100,
            scaleY: 1,
          },
        }}
        className="fixed bottom-14 left-5 hidden h-1/4 w-1 origin-center bg-gray xl:flex"
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 0.5 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 100, y: 0 },
        }}
        className="fixed bottom-14 left-5 hidden h-1/4 w-1 origin-top bg-secondary xl:flex"
        style={{ scaleY: scrollYProgress }}
      ></motion.div>

      {/* MOBILE SCROLL */}

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5, duration: 0.5 }}
        viewport={{ once: true }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 100,
          },
        }}
        className="absolute bottom-[12.5%] right-0 flex flex-col items-center"
      >
        <p className="flex h-1/6 origin-center -rotate-90 text-sm font-semibold uppercase tracking-widest text-gray xl:hidden">
          Scroll
        </p>

        <div className="mt-8 flex h-12 w-0.5 animate-scroll bg-gray xl:hidden"></div>
      </motion.div>
    </header>
  );
};

export default Home;
