import Material from "../Models/MaterialModel.js";

export const createMaterialItems = async (req, res) => {
  try {
    const { projId, quotationId, items } = req.body;
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "No materials to save" });
    }

    const materialItems = items.map(item => ({
      ...item,
      projectId: projId,
      quotationId: quotationId,
    }));

    const saved = await Material.insertMany(materialItems);
    res.status(201).json({ message: "Materials saved", data: saved });
  } catch (err) {
    console.error("Material insert error:", err);
    res.status(500).json({ error: "Failed to save materials", details: err.message });
  }
};

export const getMaterialsByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const materials = await Material.find({ projectId });
    res.status(200).json(materials);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch materials", details: err.message });
  }
};

export const getMaterialByQuotationId = async (req, res) => {
  try {
    const rows = await Material.find({ quotationId: req.params.quotationId });
    res.json(rows);
  } catch (err) {
    console.error("Get by quotationId error:", err);
    res.status(500).json({ error: "Error fetching quotation materials" });
  }
};

export const deleteMaterialItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Material.findByIdAndDelete(id);
    res.status(200).json({ message: "Material deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete material", details: err.message });
  }
};
