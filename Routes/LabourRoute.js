import express from "express";
import {
  createLabour,
  getAllLabours,
  getLaboursByProject,
  updateLabour,
  deleteLabour,
} from "../Controllers/LabourController.js";

const router = express.Router();

router.post("/create", createLabour);                // Create labour
router.get("/all", getAllLabours);                   // Get all labours
router.get("/project/:projectId", getLaboursByProject); // ✅ New route to fix 404
router.put("/update/:id", updateLabour);             // Update labour
router.delete("/delete/:id", deleteLabour);          // Delete labour

export default router;
