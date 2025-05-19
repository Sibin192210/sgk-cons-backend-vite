import express from "express"
import {
  createLabourSalary,
  getAllLabourSalaries,
  updateLabourSalary,
  deleteLabourSalary,
} from "../Controllers/LabourSalaryController.js"

const router = express.Router()

router.post("/create", createLabourSalary)
router.get("/getall", getAllLabourSalaries)
router.put("/update/:id", updateLabourSalary)
router.delete("/delete/:id", deleteLabourSalary)

export default router
