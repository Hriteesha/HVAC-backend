import * as BookingService from "./service.js";

// Create booking
export const createBooking = async (req, res) => {
  try {
    const booking = await BookingService.createBookingReviewService(req.params.userId, req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bookings of user (current + past)
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await BookingService.getUserBookingsService(req.params.userId);
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single booking
export const getBookingById = async (req, res) => {
  try {
    const booking = await BookingService.getBookingByIdService(req.params.userId, req.params.bookingId);
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update booking (status, notes, or rating)
export const updateBooking = async (req, res) => {
  try {
    const updated = await BookingService.updateBookingService(req.params.userId, req.params.bookingId, req.body);
    if (!updated) return res.status(404).json({ error: "Booking not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete booking
export const deleteBooking = async (req, res) => {
  try {
    const deleted = await BookingService.deleteBookingService(req.params.userId, req.params.bookingId);
    if (!deleted) return res.status(404).json({ error: "Booking not found" });
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
