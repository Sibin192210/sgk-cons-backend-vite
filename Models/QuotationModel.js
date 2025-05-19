// models/QuotationModel.js
import mongoose from "mongoose";

const quotationItemSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProjectDetails",
      required: true,
    },
    itemNo: String,
    description: String,
    quantity: Number,
    unit: String,
    rate: Number,
    totalAmount: Number,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("QuotationItem", quotationItemSchema);
