import express from "express";
import {
  createBooking,
  getUserBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} from "./controller.js";

const bookingrouter = express.Router();

// CRUD routes with userId in params
bookingrouter.post("/create/:userId", createBooking);
bookingrouter.get("/user/:userId", getUserBookings);
bookingrouter.get("/user/:userId/:bookingId", getBookingById);
bookingrouter.put("/update/:userId/:bookingId", updateBooking);
bookingrouter.delete("/delete/:userId/:bookingId", deleteBooking);

export default bookingrouter;
