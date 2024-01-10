import { Link } from "react-scroll";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <header name="home" className="bg-primary relative h-screen w-full">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col justify-center">
        <p className="text-secondary font-semibold">Hi, my name is</p>
        <h1 className="py-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Thomas Huynh
        </h1>
        <h2 className="text-gray text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          I'm a Front End Developer
        </h2>
        <p className="text-gray pb-4 pt-6 lg:text-lg xl:pb-6">
          I'm a front-end developer specializing in building responsive and
          interactive web applications. Currently, I'm focused on building a
          variety of front-end based projects while learning back-end
          technologies.
        </p>
        <ul className="flex pb-4 text-white xl:hidden">
          <li>
            <a
              href="https://www.linkedin.com/in/thomasthuynh/"
              target="_blank"
              className="hover:text-secondary flex p-2 duration-150 hover:scale-110"
            >
              <FaLinkedinIn size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thomasthuynh"
              target="_blank"
              className="hover:text-secondary flex p-2 duration-150 hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thomasthuynh/"
              target="_blank"
              className="hover:text-secondary flex p-2 duration-150 hover:scale-110"
            >
              <HiOutlineMail size={20} />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              className="hover:text-secondary flex p-2 duration-150 hover:scale-110"
            >
              <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </ul>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-100}
          className="hover:bg-secondary hover:border-secondary group flex items-center self-start border-2 border-white px-4 py-2 text-white duration-300"
        >
          View Work
          <span className="ml-2 duration-300 group-hover:rotate-90">
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>

      <div className="fixed bottom-1/2 left-0 hidden translate-y-1/2 xl:flex">
        <ul className="flex flex-col text-white">
          <li>
            <a
              href="https://www.linkedin.com/in/thomasthuynh/"
              target="_blank"
              className="flex translate-x-[-75px] justify-between bg-[#0A66C2] p-4 duration-300 hover:translate-x-0"
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
              className="flex translate-x-[-75px] justify-between bg-zinc-900 p-4 duration-300 hover:translate-x-0"
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
              className="flex translate-x-[-75px] justify-between bg-emerald-600 p-4 duration-300 hover:translate-x-0"
            >
              <p>Email</p>
              <span className="ml-4">
                <HiOutlineMail size={25} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:thomas_tth@live.com"
              className="flex translate-x-[-75px] justify-between bg-slate-600 p-4 duration-300 hover:translate-x-0"
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
