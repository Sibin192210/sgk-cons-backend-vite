import mongoose from "mongoose";

const labourSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectDetails",
    required: true,
  },
//   quotationId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "QuotationItem",
//     required: true,
//   },
  name: String,
  task: String,
  hours: Number,
  idProof: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("LabourWorks", labourSchema);
