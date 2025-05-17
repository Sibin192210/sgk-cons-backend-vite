import express from "express";
import {
  createMsheetItem,
  getMsheetByProject,
  getMsheetByQuotationId,
  deleteMsheetItem,
} from "../Controllers/MsheetController.js";

const router = express.Router();

router.post("/create", createMsheetItem);
router.get("/project/:projectId", getMsheetByProject);
router.get("/quotation/:quotationId", getMsheetByQuotationId); // ✅ Updated route
router.delete("/delete/:id", deleteMsheetItem);

export default router;
