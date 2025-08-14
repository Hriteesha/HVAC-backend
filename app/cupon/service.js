import {CouponModel} from './model.js';

export const createCoupon = async (data) => await CouponModel.create(data);

export const getAllCoupons = async () => await CouponModel.find().sort({ createdAt: -1 });

export const getCouponByCode = async (code) => await CouponModel.findOne({ code, isActive: true });

export const deleteCoupon = async (id) => await CouponModel.findByIdAndDelete(id);

export const updateCoupon = async (id, data) => await CouponModel.findByIdAndUpdate(id, data, { new: true });
