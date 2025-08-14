import serviceModel from "./model.js";

const createService = async (data) => {
  const service = new serviceModel(data);
  return await service.save();
};

const getAllServices = async () => {
  return await serviceModel.find({ isActive: true });
};

const getServiceById = async (id) => {
  return await serviceModel.findById(id);
};

const updateService = async (id, data) => {
  return await serviceModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteService = async (id) => {
  // Soft delete: just mark inactive
  return await serviceModel.findByIdAndUpdate(id, { isActive: false }, { new: true });
};

export default {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
