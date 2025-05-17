import express from "express";
import {
  createMaterialItems,
  getMaterialsByProject,
  deleteMaterialItem,
  getMaterialByQuotationId
} from "../Controllers/MaterialController.js";

const router = express.Router();

router.post("/create", createMaterialItems);
router.get("/project/:projectId", getMaterialsByProject);
router.delete("/delete/:id", deleteMaterialItem);
router.get("/quotationMaterial/:quotationId", getMaterialByQuotationId);

export default router;
