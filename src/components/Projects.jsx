import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Student Record System",
    description: "A simple project for storing and displaying student information.",
    techStack: "HTML, CSS, JavaScript",
    image: "📚",
    link: "https://github.com/"
  },
  {
    id: 2,
    title: "Cybersecurity Awareness Page",
    description: "A small website that explains common cyber threats and safety tips.",
    techStack: "React, CSS",
    image: "🔐",
    link: "https://github.com/"
  },
  {
    id: 3,
    title: "To-Do App",
    description: "A basic task manager where users can add and manage daily tasks.",
    techStack: "React, JavaScript",
    image: "✅",
    link: "https://github.com/"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
