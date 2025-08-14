import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },    
  discountType: { type: String, enum: ['percentage', 'flat'], default: 'flat' },
  discountValue: { type: Number, required: true },          
  maxUsage: { type: Number, default: 1 },                    
  expiryDate: { type: Date },                               
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export const CouponModel = mongoose.model('Coupon', couponSchema);
