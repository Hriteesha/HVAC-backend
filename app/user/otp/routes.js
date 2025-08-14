import express from "express";
import * as otpcontroller from "./controller.js";

const otprouter = express.Router();

otprouter.post("/send", otpcontroller.send_otp);
otprouter.post("/verify", otpcontroller.verify_otp);
otprouter.post("/resend", otpcontroller.resend_otp);
export default otprouter;
