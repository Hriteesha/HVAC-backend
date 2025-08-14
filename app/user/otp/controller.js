import * as otpService from "./service.js";

export const send_otp = async (req, res) => {
  try {
    const { user_id } = req.body || {};
    if (!user_id) {
      return res.status(400).json({ success: false, message: "user_id is required" });
    }
    const result = await otpService.generate_otp(user_id);
    res.status(200).json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const verify_otp = async (req, res) => {
  try {
    const { user_id, otp } = req.body || {};
    if (!user_id || !otp) {
      return res.status(400).json({ success: false, message: "user_id and otp are required" });
    }
    const result = await otpService.verify_otp(user_id, otp);
    res.status(200).json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
export const resend_otp = async (req, res) => {
  try {
    const { user_id } = req.body || {};
    if (!user_id) {
      return res.status(400).json({ success: false, message: "user_id is required" });
    }
    const result = await otpService.resend_otp(user_id);
    res.status(200).json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};  
