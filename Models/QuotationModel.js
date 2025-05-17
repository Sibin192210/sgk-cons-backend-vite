// models/QuotationModel.js
import mongoose from "mongoose";

const quotationItemSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProjectDetails",
      required: true,
    },
    itemNumber: String,
    description: String,
    quantity: Number,
    unit: String,
    rate: Number,
    amount: Number,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("QuotationItem", quotationItemSchema);
