import express from "express";
import {
  createLabour,
  getAllLabours,
  getLaboursByProject,
  getLaboursByQuotation,  // ✅ Add this import
  updateLabour,
  deleteLabour,
} from "../Controllers/LabourController.js";

const router = express.Router();

router.post("/create", createLabour);                
router.get("/all", getAllLabours);                   
router.get("/project/:projectId", getLaboursByProject); 
router.get("/quotation/:quotationId", getLaboursByQuotation);  // ✅ New route
router.put("/update/:id", updateLabour);             
router.delete("/delete/:id", deleteLabour);          

export default router;
