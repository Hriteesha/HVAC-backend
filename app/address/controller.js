import * as AddressService from "./service.js";


export const createAddress = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = { ...req.body, userId };

    const savedAddress = await AddressService.createAddressService(data);
    res.status(201).json(savedAddress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getAddresses = async (req, res) => {
  try {
    const addresses = await AddressService.getAddressesService(req.params.userId);
    res.status(200).json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAddressById = async (req, res) => {
  try {
    const address = await AddressService.getAddressByIdService(req.params.id);
    if (!address) return res.status(404).json({ error: "Address not found" });
    res.status(200).json(address);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const userId = req.params.userId; 
    const addressId = req.params.id;  
    const updated = await AddressService.updateAddressService(userId, addressId, req.body);
    if (!updated) return res.status(404).json({ error: "Address not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// DELETE address
export const deleteAddress = async (req, res) => {
  try {
    const deleted = await AddressService.deleteAddressService(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Address not found" });
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
