import { usermodel } from "../model.js";
import bcrypt from "bcrypt";

// CHANGE password after login
export const changePassword = async (user_id, old_password, new_password) => {
  const user = await usermodel.findById(user_id);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(old_password, user.password);
  if (!isMatch) throw new Error("Old password is incorrect");

  const hashed = await bcrypt.hash(new_password, 10);
  user.password = hashed;
  return await user.save();
};


export const forgetPasswordWithOTP = async (email, otp , new_password) => {
  const user = await usermodel.findOne({ email });
  if (!user) throw new Error("User not found");

  const hashed = await bcrypt.hash(new_password, 10);
  user.password = hashed;
  return await user.save();
};

export const resetpassword = async (user_id, new_password) => {
  const hashed = await bcrypt.hash(new_password, 10);
  const user = await usermodel.findById(user_id);
  if (!user) throw new Error("User not found");
  user.password = hashed;
  return await user.save();
};
