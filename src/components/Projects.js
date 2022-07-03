import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import "./project.css";
function ProjectDiv(props) {
  let { item } = props;
  const listtags = item.tags.map((tag)=>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
  );
  return (
    <>
      <div className="project_cont max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <p className="text-gray-700 text-base">
            {item.description}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {listtags}
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <div className="mr-2">
            <a href={item.github} >Github</a>
          </div>
          <div className="ml-2">
            <a href={item.live} >Live</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Some of my recent Projects using C++,Python,HTML / CS / JS, APIs, and frameworks like nodejs, ReactJs,etc...
          </p>
        </div>
        <div className="project_container">
          {projects.map((project) => (
            <ProjectDiv item={project} />
          ))}
        </div>
        <button class="px-4 py-1 mt-4 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"><a href="https://github.com/Alphx-rgb">More Projects</a></button>

      </div>
    </section >
  );
}