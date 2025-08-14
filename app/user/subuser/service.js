import subuserModel from "./model.js";

export const createSubUser = async (data) => {
  const subuser = new subuserModel(data);
  return await subuser.save();
};

export const getAllSubUsers = async (businessUserId) => {
  return await subuserModel.find({ business_user_id: businessUserId, isDeleted: false });
};

export const getSubUserById = async (id) => {
  return await subuserModel.findById(id);
};

export const updateSubUser = async (id, data) => {
  return await subuserModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteSubUser = async (id) => {
  return await subuserModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};
 