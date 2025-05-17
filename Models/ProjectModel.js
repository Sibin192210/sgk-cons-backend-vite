import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectNumber: {
    type: String,
    required: true,
    unique: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  client: {
    type: String,
  },
  budget: {
    type: Number,
  },
  projectManager: {
    type: String,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High", "Urgent"],
    default: "Medium",
  },
  status: {
    type: String,
    enum: ["Pending", "Planning", "On Progress", "Completed"],
    default: "Pending",
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("ProjectDetails", projectSchema);
