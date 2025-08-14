import express from "express";
import * as Technicianservice from "./controller.js";
import upload from "../middleware/upload.js";

const Techniciansrouter = express.Router();

Techniciansrouter.post("/create",upload.single("profile_picture"),upload.none(),Technicianservice.create_technician)
Techniciansrouter.post("/login",upload.none(),Technicianservice.login_technician);
Techniciansrouter.get("/getall",upload.none(),Technicianservice.get_all_technicians)
Techniciansrouter.get("/getprofile/:id",upload.none(),Technicianservice.get_technician)
Techniciansrouter.put("/update/:id",upload.none(),Technicianservice.update_technician)
Techniciansrouter.delete("/delete/:id",upload.none(),Technicianservice.delete_technician)
Techniciansrouter.put("/restore/:id",upload.none(),Technicianservice.restore_technician)

export default Techniciansrouter