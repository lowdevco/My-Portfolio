import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ProjectList from "@/components/ProjectList";
import SectionHead from "@/components/SectionHead";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

function Project() {
  return (
    <div className="wrap py-28 md:py-40">
      <SectionHead
        index="04"
        path="ls ~/projects --featured"
        title={
          <>
            Selected <span className="text-accent">work.</span>
          </>
        }
      />

      <ProjectList projects={featuredProjects} />

      <div data-reveal className="mt-14 flex justify-center">
        <Link to="/projects" className="btn btn-ghost">
          <span className="roll">
            <span data-text={`View all ${projects.length} projects`}>View all {projects.length} projects</span>
          </span>
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export default Project;
