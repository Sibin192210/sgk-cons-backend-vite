import express from "express";
import {AddUserDetails,viewAllUsers,updateUser,deleteUser,countUsersByRole} from "../Controllers/UserController.js"


const Router = express.Router();

Router.post("/AddUserDetails", AddUserDetails);
Router.get("/viewAllUsers", viewAllUsers);
Router.put("/updateUser/:id", updateUser);
Router.delete("/deleteUser/:id", deleteUser);
Router.get("/countUsersByRole", countUsersByRole);

export default Router;
