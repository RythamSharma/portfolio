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
        <p className=" text-white text-5xl md:text-8xl content-center">
          Rytham <span className="text-sky-500">Sharma</span>
        </p>
        <p className="title text-white text-2xl">
         Bob, The Builder
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:sharmarytham2@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1p_RcPTAG0F8WWYjt2u7aGdlX9ZJE3-6E/view?usp=sharing"
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
