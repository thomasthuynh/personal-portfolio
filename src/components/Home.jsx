import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <header className="bg-primary relative h-screen w-full">
      <div className="mx-auto flex h-full w-[90%] max-w-[900px] flex-col justify-center">
        <p className="text-neon font-semibold">Hi, my name is</p>
        <h1 className="py-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Thomas Huynh
        </h1>
        <h2 className="text-gray text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          I'm a Front End Developer
        </h2>
        <p className="text-gray py-6 lg:text-lg">
          I'm a front-end developer specializing in building responsive and
          interactive web applications. Currently, I'm focused on building a
          variety of front-end projects while learning back-end technologies.
        </p>
        <button className="hover:bg-neon hover:border-neon group flex items-center self-start border-2 border-white px-4 py-2 text-white duration-300">
          View Work
          <span className="ml-2 duration-300 group-hover:rotate-90">
            <HiOutlineArrowNarrowRight />
          </span>
        </button>
      </div>

      <div className="xs:bottom-4 xs:left-0 xs:translate-x-0 absolute bottom-0 left-1/2 -translate-x-1/2 xl:bottom-1/2 xl:translate-y-1/2">
        <ul className="xs:flex-col flex text-white">
          <li>
            <a
              href="https://www.linkedin.com/in/thomasthuynh/"
              target="_blank"
              className="xs:translate-x-[-75px] xs:hover:translate-x-0 flex justify-between bg-blue-600 p-4 duration-300"
            >
              <p className="xs:flex hidden">LinkedIn</p>
              <span className="xs:ml-4">
                <FaLinkedinIn size={25} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thomasthuynh"
              target="_blank"
              className="xs:translate-x-[-75px] xs:hover:translate-x-0 flex justify-between bg-zinc-900 p-4 duration-300"
            >
              <p className="xs:flex hidden">Github</p>
              <span className="xs:ml-4">
                <FaGithub size={25} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:thomas_tth@live.com"
              className="xs:translate-x-[-75px] xs:hover:translate-x-0 flex justify-between bg-emerald-600 p-4 duration-300"
            >
              <p className="xs:flex hidden">Email</p>
              <span className="xs:ml-4">
                <HiOutlineMail size={25} />
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:thomas_tth@live.com"
              className="xs:translate-x-[-75px] xs:hover:translate-x-0 flex justify-between bg-slate-600 p-4 duration-300"
            >
              <p className="xs:flex hidden">Resume</p>
              <span className="xs:ml-4">
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
