import mongoose from "mongoose";

const bookingReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
technician: { type: mongoose.Schema.Types.ObjectId, ref: "technician" },
  addressId: { type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
  serviceType: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["pending", "confirmed", "completed", "cancelled"], default: "pending" },
  notes: { type: String },
  technicianRating: { type: Number, min: 1, max: 5 } // Rating after completion
}, { timestamps: true });

export default mongoose.model("BookingReview", bookingReviewSchema);
