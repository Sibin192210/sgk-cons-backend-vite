
import mongoose from "mongoose";

const labourProfileSchema = new mongoose.Schema({
  category: { type: String, enum: ["Skilled", "Unskilled"], required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  ifscCode: { type: String },
  branchName: { type: String },
  accountNumber: { type: String },
  idProof: { type: String }, // filename of uploaded ID proof
});

const LabourProfile = mongoose.model("LabourProfile", labourProfileSchema);
export default LabourProfile;
