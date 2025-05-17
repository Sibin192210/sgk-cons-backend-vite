import Msheet from "../Models/MsheetModel.js";

// Create MSheet rows
export const createMsheetItem = async (req, res) => {
  try {
    const { projId, quotationId, items } = req.body;

    const newItems = items.map(item => ({
      ...item,
      projectId: projId,
      quotationId: quotationId,
    }));

    const saved = await Msheet.insertMany(newItems);
    res.json(saved);
  } catch (err) {
    console.error("Create MSheet Error:", err);
    res.status(500).json({ error: "Error saving MSheet data" });
  }
};

// Get MSheet by projectId (optional)
export const getMsheetByProject = async (req, res) => {
  try {
    const rows = await Msheet.find({ projectId: req.params.projectId });
    res.json(rows);
  } catch (err) {
    console.error("Get by projectId error:", err);
    res.status(500).json({ error: "Error fetching project MSheet" });
  }
};

// ✅ Get MSheet by quotationId (used in frontend)
export const getMsheetByQuotationId = async (req, res) => {
  try {
    const rows = await Msheet.find({ quotationId: req.params.quotationId });
    res.json(rows);
  } catch (err) {
    console.error("Get by quotationId error:", err);
    res.status(500).json({ error: "Error fetching quotation MSheet" });
  }
};

// Delete MSheet row
export const deleteMsheetItem = async (req, res) => {
  try {
    const deleted = await Msheet.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    console.error("Delete MSheet error:", err);
    res.status(500).json({ error: "Error deleting row" });
  }
};
