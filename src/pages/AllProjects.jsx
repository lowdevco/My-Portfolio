import React from "react";
import Layout from "@/components/Layout";
import SectionHead from "@/components/SectionHead";
import ProjectList from "@/components/ProjectList";
import { projects } from "../data/projects";

function AllProjects() {
  return (
    <Layout>
      <main className="wrap pt-40 pb-28 md:pt-48 md:pb-40">
        <SectionHead
          as="h1"
          index={String(projects.length).padStart(2, "0")}
          path="ls ~/projects --all"
          title={
            <>
              All <span className="text-accent">projects.</span>
            </>
          }
        >
          <p data-reveal className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            A complete collection of my web applications, open-source projects, and experiments.
          </p>
        </SectionHead>

        <ProjectList projects={projects} headingLevel="h2" />
      </main>
    </Layout>
  );
}

export default AllProjects;
