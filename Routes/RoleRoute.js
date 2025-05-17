import express from "express";
import {createRole,updateRole,deleterole,getRoles} from "../Controllers/RoleController.js"

const Router = express.Router();

Router.post("/createRole", createRole);
Router.put("/updateRole/:id", updateRole);
Router.delete("/deleterole/:id", deleterole);
Router.get("/getRoles", getRoles);

export default Router;
