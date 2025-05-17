import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    permissions: {
      userManagement: Boolean,
      roleManagement: Boolean,
      projectManagement: Boolean,
      hrManagement: Boolean,
      materialManagement: Boolean,
      accountsManagement: Boolean,
      laborManagement: Boolean,
      dashboard: Boolean,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userlogin",
    },
  },
  { timestamps: true }
);

export default mongoose.model("RoleDetails", roleSchema); // ✅ Correct ES export
