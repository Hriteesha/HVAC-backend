import express from "express";
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "./controller.js";

const servicerouter = express.Router();

servicerouter.post("/create", createService);
servicerouter.get("/getall", getAllServices);
servicerouter.get("/:id", getServiceById);
servicerouter.put("/:id", updateService);
servicerouter.delete("/:id", deleteService);

export default servicerouter;
