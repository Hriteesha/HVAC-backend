import { usermodel } from "../model.js";

export const get_profile = async (id) => {
  const user = await usermodel.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

export const update_profile = async (id, data) => {
  if (!id || !data) {
    throw new Error("Missing user ID or update data");
  }

  const user = await usermodel.findByIdAndUpdate(id, data, { new: true });

  if (!user) {
    throw new Error("User not found or update failed");
  }

  return user;
};

export const delete_profile = async (id) => {
  if (!id) {
    throw new Error("Missing user ID");
  }

  const user = await usermodel.findByIdAndDelete(id);

  if (!user) {
    throw new Error("User not found or delete failed");
  }

  return { message: "User deleted successfully" };
};