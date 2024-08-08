import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import Logo from "../assets/Logo.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [hamburgerToggled, setHamburgerToggled] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.25, duration: 0.5 }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 100, y: 0 },
      }}
      className="fixed left-0 top-0 z-20 mx-auto h-[83px] w-full bg-primary text-white"
    >
      <div className="mx-auto flex w-[90%] max-w-[2560px] items-center justify-between py-4">
        {/* LOGO */}
        <div>
          <img src={Logo} alt="TH" />
        </div>

        {/* OPEN FOR WORK */}
        <div className="w-30 hidden items-center text-xs md:flex lg:text-sm">
          <span className="mr-3 flex h-1.5 w-1.5 rounded-full bg-secondary shadow-spread-secondary"></span>
          <p className="items-left flex flex-col font-semibold uppercase tracking-wider text-white xs:flex-row md:flex-col lg:flex-row">
            Local Time&nbsp;
            <span className="text-secondary">{formatTime(time)}</span>
          </p>
        </div>

        {/* MENU */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-10 text-sm font-semibold uppercase tracking-wider">
            {/* HOME LINK */}
            <li>
              <Link to="home" smooth={true} duration={500}>
                <motion.div
                  initial="initial"
                  whileHover="whileHover"
                  className="relative overflow-hidden"
                >
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: 0, opacity: 1 },
                      whileHover: { y: "-100%" },
                    }}
                  >
                    Home
                  </motion.p>
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: "100%", opacity: 1 },
                      whileHover: { y: 0 },
                    }}
                    className="absolute inset-0 text-secondary"
                  >
                    Home
                  </motion.p>
                </motion.div>
              </Link>
            </li>
            {/* ABOUT LINK */}
            <li>
              <Link to="about" smooth={true} duration={500}>
                <motion.div
                  initial="initial"
                  whileHover="whileHover"
                  className="relative overflow-hidden"
                >
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: 0, opacity: 1 },
                      whileHover: { y: "-100%" },
                    }}
                  >
                    About
                  </motion.p>
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: "100%", opacity: 1 },
                      whileHover: { y: 0 },
                    }}
                    className="absolute inset-0 text-secondary"
                  >
                    About
                  </motion.p>
                </motion.div>
              </Link>
            </li>
            {/* SKILLS LINK */}
            <li>
              <Link to="skills" smooth={true} duration={500}>
                <motion.div
                  initial="initial"
                  whileHover="whileHover"
                  className="relative overflow-hidden"
                >
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: 0, opacity: 1 },
                      whileHover: { y: "-100%" },
                    }}
                  >
                    Skills
                  </motion.p>
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: "100%", opacity: 1 },
                      whileHover: { y: 0 },
                    }}
                    className="absolute inset-0 text-secondary"
                  >
                    Skills
                  </motion.p>
                </motion.div>
              </Link>
            </li>
            {/* PROJECTS LINK */}
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-100}>
                <motion.div
                  initial="initial"
                  whileHover="whileHover"
                  className="relative overflow-hidden"
                >
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: 0, opacity: 1 },
                      whileHover: { y: "-100%" },
                    }}
                  >
                    Projects
                  </motion.p>
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: "100%", opacity: 1 },
                      whileHover: { y: 0 },
                    }}
                    className="absolute inset-0 text-secondary"
                  >
                    Projects
                  </motion.p>
                </motion.div>
              </Link>
            </li>
            {/* CONTACT LINK */}
            <li>
              <Link to="contact" smooth={true} duration={500}>
                <motion.div
                  initial="initial"
                  whileHover="whileHover"
                  className="relative overflow-hidden"
                >
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: 0, opacity: 1 },
                      whileHover: { y: "-100%" },
                    }}
                  >
                    Contact
                  </motion.p>
                  <motion.p
                    transition={{ duration: 0.25 }}
                    variants={{
                      initial: { y: "100%", opacity: 1 },
                      whileHover: { y: 0 },
                    }}
                    className="absolute inset-0 text-secondary"
                  >
                    Contact
                  </motion.p>
                </motion.div>
              </Link>
            </li>
          </ul>
        </div>

        {/* HAMBURGER */}
        <div
          onClick={() => setHamburgerToggled(!hamburgerToggled)}
          className="z-10 cursor-pointer md:hidden"
        >
          {hamburgerToggled ? (
            <div className="flex w-full justify-between">
              {/* CLOSE */}
              <FaXmark size={30} />
            </div>
          ) : (
            // OPEN
            <FaBars size={30} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          hamburgerToggled ? "right-0 opacity-100" : "-right-full opacity-0"
        } absolute top-0 h-screen w-full bg-primary duration-300`}
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          {/* OPEN FOR WORK */}
          <div className="absolute left-0 top-0 flex items-center p-8 text-xs xs:text-sm">
            <span className="mr-3 flex h-1.5 w-1.5 rounded-full bg-secondary shadow-spread-secondary"></span>
            <p className="items-left flex font-semibold uppercase tracking-wider text-white">
              Local Time&nbsp;
              <span className="text-secondary">{formatTime(time)}</span>
            </p>
          </div>
          {/* MOBILE LINKS */}
          <ul className="flex h-1/2 w-3/4 -translate-y-1/4 flex-col justify-center gap-4 text-left text-2xl font-semibold uppercase tracking-wider">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setHamburgerToggled(!hamburgerToggled)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setHamburgerToggled(!hamburgerToggled)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setHamburgerToggled(!hamburgerToggled)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setHamburgerToggled(!hamburgerToggled)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setHamburgerToggled(!hamburgerToggled)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
