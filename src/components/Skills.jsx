import { motion } from "framer-motion";
import Language from "../ui/Language";

import HTML from "../assets/languages/html5-original.svg";
import CSS from "../assets/languages/css3-original.svg";
import JavaScript from "../assets/languages/javascript-original.svg";
import TypeScript from "../assets/languages/typescript-original.svg";
import React from "../assets/languages/react-original.svg";
import Firebase from "../assets/languages/firebase-plain.svg";
import Tailwind from "../assets/languages/tailwindcss-plain.svg";
import SASS from "../assets/languages/sass-original.svg";
import Node from "../assets/languages/nodejs-original.svg";
import MongoDB from "../assets/languages/mongodb-original.svg";
import SQL from "../assets/languages/sqldeveloper-original.svg";
import Python from "../assets/languages/python-original.svg";
import Figma from "../assets/languages/figma-original.svg";
import FramerMotion from "../assets/languages/framermotion-original.svg";
import Photoshop from "../assets/languages/photoshop-original.svg";

const Skills = () => {
  return (
    <section
      name="skills"
      className="flex min-h-screen w-full items-center justify-center bg-primary pb-24 xs:pb-36 md:pb-0"
    >
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col items-center justify-center text-white">
        <h2 className="text-center text-4xl font-semibold">
          My Technology <span className="text-secondary">Stack</span>
        </h2>

        <p
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 100, y: 0 },
          }}
          className="pb-12 pt-4 text-gray lg:text-lg"
        >
          Here are the technologies I work with.
        </p>

        <div className="grid w-[90%] grid-cols-2 place-items-center gap-y-8 xs:grid-cols-3 md:grid-cols-4 lg:gap-y-10">
          <Language icon={HTML} name="HTML" />
          <Language icon={CSS} name="CSS" />
          <Language icon={JavaScript} name="JavaScript" />
          <Language icon={TypeScript} name="TypeScript" />
          <Language icon={React} name="React" />
          <Language icon={Firebase} name="Firebase" />
          <Language icon={Node} name="Node" />
          <Language icon={Tailwind} name="Tailwind" />
          <Language icon={SASS} name="SASS" />
          <Language icon={Photoshop} name="Photoshop" />
          <Language icon={Figma} name="Figma" />
          <Language icon={FramerMotion} name="Framer Motion" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
