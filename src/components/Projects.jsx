import Project from "./Project";

import Audiophile from "../assets/projects/Audiophile.png";
import NetflixClone from "../assets/projects/NetflixClone.png";
import Photosnap from "../assets/projects/Photosnap.png";

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

const Projects = () => {
  return (
    <section name="projects" className="w-full bg-primary">
      <div className="mx-auto flex h-full w-[90%] max-w-[1280px] flex-col items-center justify-center text-white">
        <h2 className="text-center text-4xl font-semibold">
          Recent <span className="text-secondary">Projects</span>
        </h2>

        <p className="pb-12 pt-4 text-gray lg:text-lg">
          Check out some of my recent work.
        </p>
        <div className="grid gap-20">
          <Project
            no="01"
            name="Audiophile"
            image={Audiophile}
            languages={[
              { name: "React", icon: React },
              {
                name: "TypeScript",
                icon: TypeScript,
              },
              {
                name: "Tailwind",
                icon: Tailwind,
              },
            ]}
            description="An e-Commerce website for audio peripherals with unique product pages, a user-friendly cart, and a secure checkout process."
            github="https://github.com/thomasthuynh/audiophile-ecommerce-website"
            live="https://audiophile-amplify.vercel.app/"
          />
          <Project
            no="02"
            name="Netflix Clone"
            image={NetflixClone}
            languages={[
              { name: "React", icon: React },
              {
                name: "JavaScript",
                icon: JavaScript,
              },
              {
                name: "Firebase",
                icon: Firebase,
              },

              {
                name: "Tailwind",
                icon: Tailwind,
              },
            ]}
            description="A movie trailer website where users can create their own account, preview their favourite movies, and build a personalized watchlist."
            github="https://github.com/thomasthuynh/netflix-trailer-app"
            live="https://netflix-trailer-app.vercel.app/"
          />
          <Project
            no="03"
            name="Photosnap"
            image={Photosnap}
            languages={[
              { name: "React", icon: React },
              {
                name: "TypeScript",
                icon: TypeScript,
              },
              {
                name: "SASS",
                icon: SASS,
              },
            ]}
            description="A UI for a photography website where users can upload photos paired with stories, offering a professional platform with various membership tiers."
            github="https://github.com/thomasthuynh/photosnap"
            live="https://photosnap-designs.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
