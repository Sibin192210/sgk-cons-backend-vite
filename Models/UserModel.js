import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String },
  status: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "userlogin" },
});

export default mongoose.model("UserDetails", userschema); // ✅ Use export default
