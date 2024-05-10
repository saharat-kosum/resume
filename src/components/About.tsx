import { useContext } from "react";
import { RefContext } from "../context/refContext";

function About() {
  const refContext = useContext(RefContext);
  const { aboutRef } = refContext || {};
  return (
    <div className="hero py-20 bg-base-200" ref={aboutRef}>
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6 text-pretty">
            As a frontend developer with one year of experience, I've honed my
            skills in various technologies including React.js, Next.js, Vue.js,
            Express.js, PostgreSQL, MongoDB, and TailwindCSS. My background as a
            process engineer in the semiconductor industry equipped me with
            strong problem-solving abilities and a knack for process
            improvement. Now, I'm eager to leverage my technical expertise to
            craft user-friendly web applications. With a passion for learning
            and growth, I'm excited about the opportunities ahead in my career
            as a developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
