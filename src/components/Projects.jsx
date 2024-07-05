import Project from "./Project";

import Audiophile from "../assets/projects/Audiophile.png";
import NetflixClone from "../assets/projects/NetflixClone.jpg";
import Photosnap from "../assets/projects/Photosnap.png";
import WhosThatPokemon from "../assets/projects/WhosThatPokemon.png";
import VirtualR from "../assets/projects/VirtualR.png"

const Projects = () => {
  return (
    <section name="projects" className="w-full bg-primary">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col items-center justify-center text-white">
        <h2 className="text-center text-4xl font-bold">
          Recent <span className="text-secondary">Projects</span>
        </h2>

        <p className="pb-12 pt-4 text-gray lg:text-lg">
          Check out some of my recent work.
        </p>

        <Project
          name="Audiophile"
          image={Audiophile}
          languages="React, TypeScript, Tailwind"
          description="A dynamic React e-Commerce platform specializing in audio peripherals. This site features unique product pages accessible through dynamic routing and enables users to add items to their cart and make purchases through a checkout process backed by secure form validation."
          github="https://github.com/thomasthuynh/audiophile-ecommerce-website"
          live="https://audiophile-amplify.vercel.app/"
        />
        <Project
          name="Netflix Clone"
          image={NetflixClone}
          languages="React, Firebase, Tailwind"
          description="A full-stack movie trailer application created using React as a front-end for the UI and protected routing, and Firebase as a back-end for user authentication and cloud storage, allowing users to create their own account and save their favourite movies."
          github="https://github.com/thomasthuynh/netflix-trailer-app"
          live="https://netflix-trailer-app.vercel.app/"
        />
        <Project
          name="Photosnap"
          image={Photosnap}
          languages="React, TypeScript, SASS/CSS"
          description="A photography based React site utilizing grid layouts for a structured and visually appealing interface coupled with SCSS partials for styling arrangement. The objective was to create a focus on aesthetic design and UX development, ensuring an intuitive and user-friendly experience."
          github="https://github.com/thomasthuynh/photosnap"
          live="https://photosnap-designs.vercel.app/"
        />
        {/* <Project 
        name="Who's That Pokemon?"
        image={WhosThatPokemon}
        languages="JavaScript, SASS/CSS, HTML"
        description="A Pokemon generator built with vanilla JavaScript utilizing the PokeAPI for data implementation. Find information on all your favourite Pokemon through a manual or random search."
        github="https://github.com/junoprojects/whosThatPokemonThomasAndRebecca"
        live="https://whosthatpokemonweb.netlify.app/"
        /> */}
        <Project
          name="VirtualR"
          image={VirtualR}
          languages="React, Tailwind"
          description="UI for a virtual reality landing page, designed to showcase modern web development techniques. This project highlights the fast and responsive capabilities of front-end technologies and is currently a work in progress."
          github="#"
          live="https://virtualr-dev.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
