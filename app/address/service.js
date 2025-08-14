import Address from "./model.js";

export const createAddressService = async (data) => {
  const address = new Address(data);
  return await address.save();
};

export const getAddressesService = async (userId) => {
  return await Address.find({ userId });
};

export const getAddressByIdService = async (id) => {
  return await Address.findById(id);
};

export const updateAddressService = async (userId, addressId, data) => {
  return await Address.findOneAndUpdate(
    { _id: addressId, userId: userId }, 
    data,
    { new: true }
  );
};

export const deleteAddressService = async (id) => {
  return await Address.findByIdAndDelete(id);
};
