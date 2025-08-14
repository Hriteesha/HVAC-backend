import express from "express";
import {
  createAddress,
  getAddresses,
  getAddressById,
  updateAddress,
  deleteAddress
} from "./controller.js";

const addressRouter = express.Router();


addressRouter.post("/create/:id", createAddress);


addressRouter.get("/user/:userId", getAddresses);

addressRouter.get("/:id", getAddressById);


addressRouter.put("/update/:userId/:id", updateAddress);

addressRouter.delete("/delete/:id", deleteAddress);

export default addressRouter;
