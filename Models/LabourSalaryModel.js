import mongoose from "mongoose"

const labourSalarySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ["paid", "unpaid"], default: "unpaid" },
  },
  { timestamps: true },
)

const LabourSalary = mongoose.model("LabourSalary", labourSalarySchema)
export default LabourSalary
