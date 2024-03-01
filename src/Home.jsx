// import ParticleNew from "./ParticlesNew";

import { useState } from "react";
import Particle from "./Particle";
export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center gap-4 h-screen align-center"
        // style={{ margin: "13rem auto 17rem auto" }}
      >
        <p className="name font-medium text-white text-8xl content-center">
          Rytham <span className="text-sky-500">Sharma</span>
        </p>
        <p className="title text-white text-2xl">
         A Passionate Full-Stack Developer
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:sharmarytham2@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1l5CggOez7a1Am4kieI3EQcFfRyaaIaog/view?usp=sharing"
            target="_blank"
          >
            <i className="fa-solid fa-file-lines text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/rytham-sharma-08467b278/" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/RythamSharma" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
