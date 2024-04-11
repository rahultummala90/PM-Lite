import { SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
  project: Project;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

const ProjectForm = ({
  onSave,
  onCancel,
  project: initialProject,
}: ProjectFormProps) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(project);
  };

  const handleChange = (event: any) => {
    const { type, name, checked, value } = event.target;
    let updatedValue = type === "checkbox" ? checked : value;
    updatedValue = type === "number" ? Number(updatedValue) : updatedValue;

    const change = {
      [name]: updatedValue, // In this line, the object change is created with a dynamic key.
    };

    let updatedProject: Project;
    setProject((currentProject) => {
      updatedProject = new Project({ ...currentProject, ...change });
      return updatedProject;
    });

    setErrors(() => validate(updatedProject));
  };

  const validate = (project: Project) => {
    let errors: any = { name: "", description: "", budget: "" };

    return errors;
  };

  return (
    <>
      <form className="input-group vertical" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            name="name"
            placeholder="name...."
            value={project.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Project Description</label>
          <textarea
            name="description"
            placeholder="description..."
            value={project.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label>Project Budget</label>
          <input
            type="text"
            name="budget"
            placeholder="budget..."
            value={project.budget}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="isActive">Is Active</label>
          <input
            type="checkbox"
            name="isActive"
            checked={project.isActive}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <button type="submit" className="primary bordered">
            Save
          </button>
          <button type="button" className="bordered" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
