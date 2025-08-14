import ServiceService from "./service.js";

export const createService = async (req, res) => {
  try {
    const data = req.body;
    if (!data.name) {
      return res.status(400).json({ success: false, message: "Service name is required" });
    }
    const service = await ServiceService.createService(data);
    res.status(201).json({ success: true, data: service });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllServices = async (req, res) => {
  try {
    const services = await ServiceService.getAllServices();
    res.status(200).json({ success: true, data: services });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await ServiceService.getServiceById(id);
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.status(200).json({ success: true, data: service });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updated = await ServiceService.updateService(id, data);
    if (!updated) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await ServiceService.deleteService(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.status(200).json({ success: true, message: "Service deleted (soft delete)", data: deleted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
