import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [hamburgerToggled, setHamburgerToggled] = useState(false);

  return (
    <nav className="bg-primary fixed flex h-[80px] w-full items-center justify-between px-8 text-white">
      {/* LOGO */}
      <div>
        <p>Thomas Huynh</p>
      </div>

      {/* MENU */}
      <div className="hidden md:flex">
        <ul className="flex gap-12 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* HAMBURGER */}
      <div
        onClick={() => setHamburgerToggled(!hamburgerToggled)}
        className="z-10 cursor-pointer md:hidden"
      >
        {hamburgerToggled ? <FaXmark size={20} /> : <FaBars size={20} />}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          hamburgerToggled ? "right-0" : "-right-full"
        } bg-primary absolute top-0 h-screen w-2/3 duration-300`}
      >
        <ul className="flex h-3/4 flex-col items-center justify-center gap-8 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
