import LabourWorks from "../Models/LabourModel.js";
import LabourProfile from "../Models/LabourProfileModel.js";
// Create Labour (modified to handle multiple items)
export const createLabour = async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "No labour items provided" });
    }

    // Save all labour items, ensure each has projectId
    const savedLabours = [];
    for (const item of items) {
      if (!item.projectId) {
        return res.status(400).json({ message: "projectId is required for each labour" });
      }
      const newLabour = new LabourWorks(item);
      const saved = await newLabour.save();
      savedLabours.push(saved);
    }

    res.status(201).json(savedLabours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create labour records" });
  }
};


// Get All Labours
export const getAllLabours = async (req, res) => {
    try {
      console.log("nvknvhmvmhv");
      
    const labours = await LabourProfile.find({});
    res.status(200).json(labours);
  } catch (error) {
    res.status(500).json({ message: "Failed to get labour profiles" });
  }
};

// Get Labours by Project ID
// Get Labours by Project ID (fixed)
export const getLaboursByProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    const labours = await LabourWorks.find({ projectId }); // ✅ Correct model
    res.status(200).json(labours);
  } catch (error) {
    console.error("Error fetching labours by project:", error);
    res.status(500).json({ message: "Failed to fetch labours by project" });
  }
};


// Update Labour
export const updateLabour = async (req, res) => {
  try {
    const updatedLabour = await LabourProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLabour) {
      return res.status(404).json({ message: "Labour not found" });
    }
    res.status(200).json(updatedLabour);
  } catch (error) {
    res.status(500).json({ message: "Failed to update labour profile" });
  }
};

// Delete Labour
export const deleteLabour = async (req, res) => {
  try {
    const deletedLabour = await LabourProfile.findByIdAndDelete(req.params.id);
    if (!deletedLabour) {
      return res.status(404).json({ message: "Labour not found" });
    }
    res.status(200).json({ message: "Labour deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete labour profile" });
  }
};
