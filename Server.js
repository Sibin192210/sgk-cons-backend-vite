import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import "./DbConnection.js";

import projectRouter from "./routes/ProjectRoute.js";
import quotationRouter from "./routes/QuotationRoute.js";
import roleRouter from "./routes/RoleRoute.js";
import userRouter from "./routes/UserRoute.js";
import msheetRouter from "./routes/MsheetRoute.js";
import materialRouter from "./routes/MaterialRoute.js";
import labourRouter from "./Routes/LabourRoute.js";           // Labour work routes
import labourProfileRouter from "./routes/LabourProfileRoute.js"; // Labour profile routes

import logger from "./Middleware/logger.js";
import errorHandler from "./Middleware/errorHandler.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger);

// Serve uploaded labour profile files (e.g. id proofs)
app.use("/uploads/labour", express.static(path.join(path.resolve(), "uploads/labour")));

// All routes
app.use("/api/project", projectRouter);
app.use("/api/quotation", quotationRouter);
app.use("/api/role", roleRouter);
app.use("/api/user", userRouter);
app.use("/api/msheet", msheetRouter);
app.use("/api/material", materialRouter);
app.use("/api/labourwork",labourRouter );   
app.use("/api/labourprofile", labourProfileRouter);
// Handle 404 errors for unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorHandler);

app.listen(3003, () => {
  console.log("🚀 Server running on http://localhost:3003");
});
