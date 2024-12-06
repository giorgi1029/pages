import React from "react";

const projects = [
  {
    id: 1,
    name: "Project 1",
    github: "https://github.com/yourproject1",
    vercel: "https://yourproject1.vercel.app",
  },
  {
    id: 2,
    name: "Project 2",
    github: "https://github.com/yourproject2",
    vercel: "https://yourproject2.vercel.app",
  },
];

const ProjectsPage = () => {
  return (
    <div className="container">
      <h1>Projects Page</h1>
      {projects.map((project) => (
        <div className="project" key={project.id}>
          <div>
            <h2>{project.name}</h2>
            <a href={project.github}>GitHub</a>
            <a href={project.vercel}>Vercel</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
