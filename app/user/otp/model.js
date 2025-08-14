import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  verified: { type: Boolean, default: false }
}, { timestamps: true });

export const otpmodel = mongoose.model("otp", otpSchema);
