import Language from "../ui/Language";

import HTML from "../assets/html5-original.svg";
import CSS from "../assets/css3-original.svg";
import JavaScript from "../assets/javascript-original.svg";
import TypeScript from "../assets/typescript-original.svg";
import Tailwind from "../assets/tailwindcss-plain.svg";
import SASS from "../assets/sass-original.svg";
import React from "../assets/react-original.svg";
import Firebase from "../assets/firebase-plain.svg";

const Skills = () => {
  return (
    <section name="skills" className="bg-primary h-screen w-full">
      <div className="mx-auto flex h-full w-[90%] max-w-[768px] flex-col items-center justify-center text-white">
        <h2 className="text-center text-4xl font-bold">
          My Technology <span className="text-secondary">Stack</span>
        </h2>

        <p className="text-gray pb-12 pt-4 lg:text-lg">
          Here are the technologies I've worked with.
        </p>

        <div className="xs:grid-cols-4 grid w-full grid-cols-2 place-items-center gap-2">
          <Language icon={HTML} name="HTML" />
          <Language icon={CSS} name="CSS" />
          <Language icon={JavaScript} name="JavaScript" />
          <Language icon={TypeScript} name="TypeScript" />
          <Language icon={React} name="React" />
          <Language icon={Firebase} name="Firebase" />
          <Language icon={Tailwind} name="Tailwind" />
          <Language icon={SASS} name="SASS" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
