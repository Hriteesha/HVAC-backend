import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  price: Number,
  duration: String,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const serviceModel = mongoose.model("Service", serviceSchema);
export default serviceModel;
