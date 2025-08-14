import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  title: String,
  description: String,
  discount: Number,
  validTill: Date,
});

const offerModel = mongoose.model("Offer", offerSchema);
export default offerModel;
