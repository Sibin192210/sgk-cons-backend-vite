import Projectschema from "../Models/ProjectModel.js";

const generateProjectNumber = async () => {
  const year = new Date().getFullYear();
  const prefix = "SGKE";
  const count = await Projectschema.countDocuments() + 1;
  const padded = String(count).padStart(3, "0");
  return `${year}/${prefix}/${padded}`;
};

export const createProject = async (req, res) => {
  try {
    const projectNumber = await generateProjectNumber();
    const projectData = {
      ...req.body,
      projectNumber,
      status: req.body.status || "Pending",
    };

    const newProject = new Projectschema(projectData);
    await newProject.save();

    res.status(201).json({ message: "Project created successfully", project: newProject });
  } catch (err) {
    console.error("Error creating project:", err);
    res.status(500).json({ error: "Error creating project", details: err.message });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Projectschema.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Error fetching projects", details: err.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Projectschema.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: "Error fetching project", details: err.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const updated = await Projectschema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json({ message: "Project updated", project: updated });
  } catch (err) {
    res.status(500).json({ error: "Error updating project", details: err.message });
  }
};

