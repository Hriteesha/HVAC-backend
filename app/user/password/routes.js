import express from "express";
import * as passwordcontroller from "./controller.js";
import upload from '../../middleware/upload.js';
 


const passwordrouter = express.Router();

passwordrouter.post("/password/change/:userId", passwordcontroller.changePassword);
passwordrouter.post("/password/forget",upload.none(),passwordcontroller.forgetPasswordWithOTP)
passwordrouter.post("/password/reset",upload.none(),passwordcontroller.resetpassword)
export default passwordrouter