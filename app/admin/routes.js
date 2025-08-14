import express from "express";
import * as Admincontroller from "./controller.js";
import upload from "../middleware/upload.js";


const Adminrouter = express.Router();

Adminrouter.post("/create",upload.none(),Admincontroller.create_admin)
Adminrouter.post("/login",upload.none(),Admincontroller.login_admin)
Adminrouter.get("/getall",upload.none(),Admincontroller.get_all_admin)
Adminrouter.get("/getprofile/:id",upload.none(),Admincontroller.get_admin_byId)
Adminrouter.put("/update/:id",upload.none(),Admincontroller.update_admin)
Adminrouter.delete("/delete/:id",upload.none(),Admincontroller.delete_admin)
Adminrouter.put("/restore/:id",upload.none(),Admincontroller.restore_admin)


export default Adminrouter