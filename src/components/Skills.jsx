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

const Skills = () => {
  return (
    <section name="skills" className="h-screen w-full bg-primary">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col items-center justify-center text-white">
        <h2 className="text-center text-4xl font-bold">
          My Technology <span className="text-secondary">Stack</span>
        </h2>

        <p className="pb-12 pt-4 text-gray lg:text-lg">
          Here are the technologies I've worked with.
        </p>

        <div className="grid w-full grid-cols-2 place-items-center gap-2 xs:grid-cols-4 lg:grid-cols-5">
          <Language icon={HTML} name="HTML" />
          <Language icon={CSS} name="CSS" />
          <Language icon={JavaScript} name="JavaScript" />
          <Language icon={TypeScript} name="TypeScript" />
          <Language icon={React} name="React" />
          <Language icon={Node} name="Node JS" />
          <Language icon={MongoDB} name="MongoDB" />
          <Language icon={Firebase} name="Firebase" />
          <Language
            icon={Tailwind}
            name="Tailwind"
            style="xs:col-start-2 lg:col-start-auto"
          />
          <Language
            icon={SASS}
            name="SASS"
            style="xs:col-start-3 lg:col-start-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
