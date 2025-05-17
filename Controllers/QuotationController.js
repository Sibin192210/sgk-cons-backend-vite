// controllers/QuotationController.js
import QuotationItem from "../Models/QuotationModel.js";

export const createQuotationItem = async (req, res) => {
  try {
    const newItem = new QuotationItem(req.body);
    await newItem.save();
    res.status(201).json({ message: "Quotation item added", item: newItem });
  } catch (error) {
    res.status(500).json({ error: "Failed to add item", details: error.message });
  }
};

export const getQuotationItemsByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const items = await QuotationItem.find({ projectId }).sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items", details: error.message });
  }
};

export const deleteQuotationItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await QuotationItem.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Item not found" });
    res.status(200).json({ message: "Quotation item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item", details: error.message });
  }
};

export const updateQuotationItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await QuotationItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: "Item not found" });
    res.status(200).json({ message: "Quotation item updated", updatedItem });
  } catch (error) {
    res.status(500).json({ error: "Failed to update item", details: error.message });
  }
};

