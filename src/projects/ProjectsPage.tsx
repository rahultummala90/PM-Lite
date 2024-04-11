import { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((currentProject: Project) => {
      return currentProject.id === project.id ? project : currentProject;
    });

    setProjects(updatedProjects);
  };

  return (
    <>
      <ProjectList projects={projects} onSave={saveProject} />{" "}
    </>
  );
}

export default ProjectsPage;
