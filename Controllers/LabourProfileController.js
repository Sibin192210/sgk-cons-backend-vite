import LabourProfile from "../Models/LabourProfileModel.js";

// Create
export const createLabourProfile = async (req, res) => {
  try {
    const data = req.body;
    const idProof = req.file ? req.file.filename : null;

    const labour = new LabourProfile({
      ...data,
      idProof,
    });

    const saved = await labour.save();
    res.status(201).json({ message: "Labour profile saved", data: saved });
  } catch (err) {
    if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      return res.status(400).json({ error: `${field} must be unique` });
    }
    res.status(500).json({ error: "Failed to save labour profile", details: err.message });
  }
};



// Get all
export const getAllLabourProfiles = async (req, res) => {
  try {
    const labours = await LabourProfile.find().sort({ createdAt: -1 });
    res.status(200).json(labours);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data", details: err.message });
  }
};

// Get single labour by ID
export const getLabourProfileById = async (req, res) => {
  try {
    const labour = await LabourProfile.findById(req.params.id);
    if (!labour) return res.status(404).json({ message: "Labour not found" });
    res.status(200).json(labour);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch labour", details: err.message });
  }
};

// Update
export const updateLabourProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    if (req.file) data.idProof = req.file.filename;

    const updated = await LabourProfile.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({ message: "Updated successfully", data: updated });
  } catch (err) {
    res.status(500).json({ error: "Update failed", details: err.message });
  }
};

// Delete
export const deleteLabourProfile = async (req, res) => {
  try {
    const id = req.params.id;
    await LabourProfile.findByIdAndDelete(id);
    res.status(200).json({ message: "Labour profile deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed", details: err.message });
  }
};
