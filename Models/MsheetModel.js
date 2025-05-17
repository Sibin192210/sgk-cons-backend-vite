import mongoose from "mongoose";

const msheetSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectDetails",
    required: true,
  },
  quotationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuotationItem", // reference to the quotation item, not full quotation
    required: true,
  },
  date: String,
  description: String,
  nos: Number,
  length: Number,
  breadth: Number,
  depth: Number,
  unit: String,
});

export default mongoose.model("MsheetDetails", msheetSchema);
