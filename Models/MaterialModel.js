import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectDetails",  
    required: true,
  },
  quotationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuotationItem",
    required: true,
  },
  name: String,
  qty: Number,
  unit: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("MaterialDetails", materialSchema);
