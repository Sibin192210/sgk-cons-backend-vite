// routes/quotationRoutes.js
import express from "express";
import {
  createQuotationItem,
  getQuotationItemsByProject,
  deleteQuotationItem,
  updateQuotationItem
} from "../Controllers/QuotationController.js";

const router = express.Router();

router.post("/createQuotationItem", createQuotationItem);
router.get("/getQuotationItemsByProject/:projectId", getQuotationItemsByProject);
router.delete("/deleteQuotationItem/:id", deleteQuotationItem);
router.put("/updateQuotationItem/:id", updateQuotationItem); // ✅ Edit route

export default router;
