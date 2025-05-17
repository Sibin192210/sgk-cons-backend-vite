import express from "express";
import {createProject,getAllProjects,getProjectById,updateProject } from "../Controllers/ProjectController.js"

const Router = express.Router();

Router.post("/createProject", createProject);
Router.get("/getAllProjects", getAllProjects);
Router.get("/getProjectById/:id", getProjectById);
Router.put("/updateProject/:id", updateProject);

export default Router;

