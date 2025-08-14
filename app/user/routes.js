import express from "express";
import * as authcontroller from "./controller.js";
import upload from "../middleware/upload.js";
const authrouter = express.Router();
  




authrouter.post("/register",upload.single("profile_picture"),upload.none(),authcontroller.register_user)
authrouter.post("/login",upload.none(),authcontroller.login)
authrouter

export default authrouter   