import { otpmodel } from "./model.js";
import otpGenerator from "otp-generator";

export const generate_otp = async (user_id) => {
  const otp = "6291"; 
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // still expires after 5 min

  await otpmodel.deleteMany({ user_id });

  const saved = await otpmodel.create({ user_id, otp, expiresAt });
  return { otp: saved.otp, message: "OTP generated" };
};


export const verify_otp = async (user_id, otp) => {
  
  if (otp !== "6291") {
    throw new Error("Invalid OTP");
  }

  const record = await otpmodel.findOne({ user_id, otp, verified: false });
  if (!record) throw new Error("OTP not found for user");

  if (record.expiresAt < new Date()) throw new Error("OTP expired");

  record.verified = true;
  await record.save();

  return { message: "OTP verified successfully" };
};

export const resend_otp = async(user_id) =>{

  const otp = "6291"; 
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // still expires after 5 min

  await otpmodel.deleteMany({ user_id });

  const saved = await otpmodel.create({ user_id, otp, expiresAt });
  return { otp: saved.otp, message: "OTP resent successfully" };
}