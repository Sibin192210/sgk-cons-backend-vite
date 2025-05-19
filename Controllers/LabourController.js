import LabourWorks from "../Models/LabourModel.js";
import LabourProfile from "../Models/LabourProfileModel.js";

// Create Labour Entries
export const createLabour = async (req, res) => {
  try {
    const { items } = req.body;

    if (!items?.length) {
      return res.status(400).json({ message: "No valid labour items provided" });
    }

    const savedLabours = [];

    for (const item of items) {
      if (!item.quotationId) {
        return res.status(400).json({ message: "Missing quotationId in one or more items" });
      }
      if (!item.name?.trim() || !item.task?.trim() || !item.hours) {
        return res.status(400).json({ message: "All items require name, task, and hours fields" });
      }
    }

    for (const item of items) {
      try {
        const newLabour = new LabourWorks({ ...item, createdAt: new Date() });
        const saved = await newLabour.save();
        savedLabours.push(saved);
      } catch (saveError) {
        console.error("Error saving labour item:", saveError);
        return res.status(400).json({
          message: `Failed to save item: ${saveError.message}`,
          error: saveError,
        });
      }
    }

    res.status(201).json(savedLabours);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error: " + error.message, error });
  }
};

// Get All Labour Profiles
export const getAllLabours = async (req, res) => {
  try {
    const labours = await LabourProfile.find({});
    res.status(200).json(labours);
  } catch (error) {
    res.status(500).json({ message: "Failed to get labour profiles" });
  }
};

// Get Labours by Quotation ID
export const getLaboursByQuotation = async (req, res) => {
  try {
    const { quotationId } = req.params;
    const labours = await LabourWorks.find({ quotationId });
    res.status(200).json(labours);
  } catch (error) {
    console.error("Error fetching labours by quotation:", error);
    res.status(500).json({ message: "Failed to fetch labours by quotation" });
  }
};

// Get Labours by Project ID
export const getLaboursByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const labours = await LabourWorks.find({ projectId });
    res.status(200).json(labours);
  } catch (error) {
    console.error("Error fetching labours by project:", error);
    res.status(500).json({ message: "Failed to fetch labours by project" });
  }
};

// Update Labour
export const updateLabour = async (req, res) => {
  try {
    const updatedLabour = await LabourWorks.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLabour) {
      return res.status(404).json({ message: "Labour not found" });
    }
    res.status(200).json(updatedLabour);
  } catch (error) {
    res.status(500).json({ message: "Failed to update labour" });
  }
};

// Delete Labour
export const deleteLabour = async (req, res) => {
  try {
    const deletedLabour = await LabourWorks.findByIdAndDelete(req.params.id);
    if (!deletedLabour) {
      return res.status(404).json({ message: "Labour not found" });
    }
    res.status(200).json({ message: "Labour deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete labour" });
  }
};
