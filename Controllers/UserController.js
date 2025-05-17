import Userschema from "../Models/UserModel.js";

export const AddUserDetails = (req, res) => {
  const users = new Userschema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    status: req.body.status,
    userId: req.body.userId,
  });

  users.save()
    .then(() => res.json({ msg: "User details saved" }))
    .catch((err) => {
      console.error(err);
      if (err.code === 11000) {
        res.status(409).json({ msg: "This email already exists" });
      } else {
        res.status(500).json({ msg: "Error saving user" });
      }
    });
};

export const viewAllUsers = (req, res) => {
  Userschema.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ msg: "Error fetching users", error: err.message }));
};

export const deleteUser = (req, res) => {
  Userschema.findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg: "User deleted successfully" }))
    .catch((err) => res.status(500).json({ msg: "Error deleting user", error: err.message }));
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, status, password } = req.body;

    const updateFields = { role, status };
    if (password) updateFields.password = password;

    const updatedUser = await Userschema.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({ msg: "User updated", user: updatedUser });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const countUsersByRole = async (req, res) => {
  try {
    const result = await Userschema.aggregate([
      { $group: { _id: "$role", count: { $sum: 1 } } },
    ]);
    res.json(result);
  } catch (error) {
    console.error("Error counting users by role:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


