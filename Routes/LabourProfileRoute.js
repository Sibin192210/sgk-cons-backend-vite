import express from "express";
import multer from "multer";
import {
  createLabourProfile,
  getAllLabourProfiles,
  getLabourProfileById,
  updateLabourProfile,
  deleteLabourProfile,
} from "../Controllers/LabourProfileController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/labour");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post("/create", upload.single("idProof"), createLabourProfile);
router.get("/getAll", getAllLabourProfiles);
router.get("/get/:id", getLabourProfileById); // optional: add get by id

router.put("/update/:id", upload.single("idProof"), updateLabourProfile); // ✅ Fixed
router.delete("/delete/:id", deleteLabourProfile);

export default router;
