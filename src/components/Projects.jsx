import Project from "./Project";
import Audiophile from "../assets/Audiophile.png";
import NetflixClone from "../assets/NetflixClone.jpg";
import Photosnap from "../assets/Photosnap.png";

const Projects = () => {
  return (
    <section className="bg-primary w-full">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold">
          My <span className="text-secondary">Projects</span>
        </h2>

        <p className="text-gray pb-12 pt-4 text-center lg:text-lg">
          Check out some of my recent work.
        </p>

        <Project
          name="Audiophile"
          image={Audiophile}
          languages="React, TypeScript, Tailwind"
          description="A dynamic React e-Commerce platform specializing in audio peripherals. This site features unique product pages accessible through dynamic routing and enables users to add items to their cart and make purchases through a checkout process backed by secure form validation."
          github="https://github.com/thomasthuynh/audiophile-ecommerce-website"
          live="https://audiophileamplify.netlify.app/"
        />
        <Project
          name="Netflix Clone"
          image={NetflixClone}
          languages="React, Firebase, Tailwind"
          description="A full-stack movie trailer application created using React as a front-end for the UI and protected routing, and Firebase as a back-end for user authentication and cloud storage, allowing users to create their own account and save their favourite movies."
          github="https://github.com/thomasthuynh/netflix-trailer-app"
          live="https://netflixtrailerapp.netlify.app/"
        />
        <Project
          name="Photosnap"
          image={Photosnap}
          languages="React, TypeScript, SASS"
          description="A photography based React site utilizing grid layouts for a structured and visually appealing interface coupled with SCSS partials for styling arrangement. The objective was to create a focus on aesthetic design and UX development, ensuring an intuitive and user-friendly experience."
          github="https://github.com/thomasthuynh/photosnap"
          live="https://photosnapstories.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
