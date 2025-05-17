import Roleschema from "../Models/RoleModel.js";

export const createRole = async (req, res) => {
  try {
    const { name, description, permissions } = req.body;

    const roleExists = await Roleschema.findOne({ name });
    if (roleExists) {
      return res.status(400).json({ message: "Role already exists" });
    }

    const newRole = new Roleschema({ name, description, permissions });
    await newRole.save();

    res.status(201).json({ message: "Role created successfully", role: newRole });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getRoles = async (req, res) => {
  try {
    const roles = await Roleschema.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching roles", error });
  }
};

// Delete a role
export const deleterole = async (req, res) => {
  try {
    await Roleschema.findByIdAndDelete(req.params.id);
    res.json({ msg: "Role deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting role", error: err.message });
  }
};

// Update a role
export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { permissions, description } = req.body;

    const updatedRole = await Roleschema.findByIdAndUpdate(
      id,
      { permissions, description },
      { new: true }
    );

    if (!updatedRole) {
      return res.status(404).json({ msg: "Role not found" });
    }

    res.json({ msg: "Role updated", role: updatedRole });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

