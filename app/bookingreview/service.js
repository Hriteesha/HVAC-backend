import BookingReview from "./model.js";

// Create booking
export const createBookingReviewService = async (userId, data) => {
  const booking = new BookingReview({ ...data, user: userId });
  return await booking.save();
};

// Get all bookings for a user (including past history)
export const getUserBookingsService = async (userId) => {
  return await BookingReview.find({ user: userId }).populate("technician addressId");
};

// Get single booking by ID
export const getBookingByIdService = async (userId, bookingId) => {
  return await BookingReview.findOne({ _id: bookingId, user: userId }).populate("technician addressId");
};

// Update booking (status, notes, or rating)
export const updateBookingService = async (userId, bookingId, data) => {
  return await BookingReview.findOneAndUpdate({ _id: bookingId, user: userId }, data, { new: true });
};

// Delete booking
export const deleteBookingService = async (userId, bookingId) => {
  return await BookingReview.findOneAndDelete({ _id: bookingId, user: userId });
};
