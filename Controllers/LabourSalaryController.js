import LabourSalary from "../Models/LabourSalaryModel.js"

export const createLabourSalary = async (req, res) => {
  try {
    const data = req.body
    const newRecord = new LabourSalary(data)
    const saved = await newRecord.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(500).json({ error: "Failed to create salary record", details: error.message })
  }
}

// Get all salary records
export const getAllLabourSalaries = async (req, res) => {
  try {
    const salaries = await LabourSalary.find().sort({ date: -1 })
    res.status(200).json(salaries)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch salary records", details: error.message })
  }
}

// Update salary record by id
export const updateLabourSalary = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const updated = await LabourSalary.findByIdAndUpdate(id, data, { new: true })
    if (!updated) return res.status(404).json({ message: "Record not found" })
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({ error: "Update failed", details: error.message })
  }
}

// Delete salary record by id
export const deleteLabourSalary = async (req, res) => {
  try {
    const id = req.params.id
    await LabourSalary.findByIdAndDelete(id)
    res.status(200).json({ message: "Record deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: "Delete failed", details: error.message })
  }
}
