import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import Logo from "../assets/Logo.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [hamburgerToggled, setHamburgerToggled] = useState(false);

  return (
    <motion.nav
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 3.5, duration: 0.75 }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 100, y: 0 },
      }}
      className="fixed left-0 top-0 z-10 mx-auto w-full bg-primary text-white"
    >
      <div className="mx-auto flex w-[90%] max-w-[2560px] items-center justify-between py-4">
        {/* LOGO */}
        <div>
          <img src={Logo} alt="TH" />
        </div>

        {/* MENU */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-12 font-semibold uppercase tracking-wider">
            <li className="duration-150 hover:text-secondary">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="duration-150 hover:text-secondary">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="duration-150 hover:text-secondary">
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className="duration-150 hover:text-secondary">
              <Link to="projects" smooth={true} duration={500} offset={-100}>
                Projects
              </Link>
            </li>
            <li className="duration-150 hover:opacity-80">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="rounded bg-secondary p-4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* HAMBURGER */}
        <div
          onClick={() => setHamburgerToggled(!hamburgerToggled)}
          className="z-10 cursor-pointer md:hidden"
        >
          {hamburgerToggled ? <FaXmark size={20} /> : <FaBars size={20} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          hamburgerToggled ? "right-0 opacity-100" : "-right-full opacity-0"
        } absolute top-0 h-screen w-full bg-primary duration-300`}
      >
        <div className="flex h-full w-full items-center justify-center">
          <ul className="flex h-1/2 flex-col items-center justify-center gap-12 text-2xl font-semibold uppercase tracking-wider">
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
