import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

const ProjectList = ({ projects, onSave }: ProjectListProps) => {
  const [projectEdit, setProjectEdit] = useState({});

  const handleEdit = (project: Project): void => {
    setProjectEdit(project);
  };

  const cancelEdit = () => {
    setProjectEdit({});
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div>
          {project === projectEdit ? (
            <ProjectForm
              onCancel={cancelEdit}
              onSave={onSave}
              project={project}
            />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
