import React from "react";
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">{project.image}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Tech:</strong> {project.techStack}</p>
      <a href={project.link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </article>
  );
}

export default ProjectCard;
