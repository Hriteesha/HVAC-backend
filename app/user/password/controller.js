import * as passwordservice from "./service.js";

export const changePassword = async (req, res) => {
  try {
    const { user_id, old_password, new_password } = req.body;
    const result = await passwordservice.changePassword(user_id, old_password, new_password);
    res.status(200).json({ message: "Password updated successfully", data: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const forgetPasswordWithOTP = async (req, res) => {
  try {
    const { email, otp, new_password } = req.body;
    const result = await passwordservice.forgetPasswordWithOTP(email, otp, new_password);
    res.status(200).json({ message: "Password reset successful", data: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const resetpassword = async (req, res) => {
  try {
    const { user_id, new_password } = req.body;
    console.log(user_id, new_password);

    if (!user_id || !new_password) {
      return res.status(400).json({ error: "user_id and new_password are required" });
    }

    const result = await passwordservice.resetpassword(user_id, new_password);

    return res.status(200).json({ message: "Password reset successful", data: result });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
