import express  from "express";
import * as profilecontroller from "./controller.js";
import upload from '../../middleware/upload.js';

const profilerouter = express.Router();

profilerouter.get("/getprofile/:id",upload.none(),profilecontroller.getProfile)
profilerouter.put("/update/:id",upload.single("profile_picture"),upload.none(),profilecontroller.updateProfile)
profilerouter.patch("/update/:id",upload.single("profile_picture"),upload.none(),profilecontroller.updateProfile)
profilerouter.delete("/delete/:id",upload.none(),profilecontroller.delete_profile)
export default profilerouter