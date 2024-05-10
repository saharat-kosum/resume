import { useContext } from "react";
import { RefContext } from "../context/refContext";
import facebook from "../assets/facebook.jpg";
import twitter from "../assets/twitter.jpg";
import swensens from "../assets/icecream.jpg";

const projects = [
  {
    img: facebook,
    name: "Facebook Clone",
    description:
      "This project aims to master React.js, Express.js, MongoDB, WebSockets, and Bootstrap by recreating a social media platform's core features. From user authentication to real-time messaging, each aspect serves as a practical exercise in dynamic web app development.",
    stack: "React.js, Express.js, MongoDB, Bootstrap",
    github: "https://github.com/saharat-kosum/facebook-clone",
  },
  {
    img: twitter,
    name: "Twitter Clone",
    description:
      "The Twitter Clone project is a hands-on approach to enhancing Vue.js and TailwindCSS skills. By replicating Twitter's interface and functions, the goal is to deepen understanding of frontend development with Vue.js and the utility-first CSS framework, TailwindCSS, refining skills in responsive web app design.",
    stack: "Vue.js, TailwindCSS",
    github: "https://github.com/saharat-kosum/twitter-clone",
  },
  {
    img: swensens,
    name: "Swensen Clone",
    description:
      "The Swensen's Clone project is designed to improve Next.js, TailwindCSS, and Prisma proficiency. Emulating Swensen's website, it focuses on Next.js for server-side rendering, TailwindCSS for styling, and Prisma for database management. This project offers a comprehensive learning experience in developing scalable web apps with modern tech.",
    stack: "Next.js, TailwindCSS, Prisma",
    github: "https://github.com/saharat-kosum/swensen-clone",
  },
];

function Projects() {
  const refContext = useContext(RefContext);
  const { projectRef } = refContext || {};
  return (
    <div ref={projectRef} className="px-1 py-20 hero">
      <div className="hero-content">
        <div className="">
          <h1 className="text-3xl font-semibold mb-4">Projects</h1>
          <div className="flex flex-col gap-5">
            {projects.map((project, index) => (
              <div
                className="card lg:card-side bg-base-100 shadow-xl"
                key={index}
              >
                <figure className="max-w-sm max-h-sm">
                  <img src={project.img} alt="Project" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <p className="max-w-96 text-balance text-gray-500">
                    {project.description}
                  </p>
                  <p className="text-pretty font-bold">{project.stack}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
