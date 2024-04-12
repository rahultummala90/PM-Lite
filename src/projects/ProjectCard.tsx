import { Project } from "./Project";

const formatDescription = (description: string): string => {
  return description.substring(0, 60) + "....";
};

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

const ProjectCard = ({ project, onEdit }: ProjectCardProps) => {
  const handleEditClick = (projectEdit: Project) => {
    onEdit(projectEdit);
  };

  return (
    <>
      <div className="card" key={project.id}>
        <img src={project.imageUrl} alt="Project Name" />
        <div className="section dark">
          <h5 className="strong">{project.name}</h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget: {project.budget.toLocaleString()}</p>
          <button className="bordered" onClick={() => handleEditClick(project)}>
            <span className="icon-edit"></span>
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
