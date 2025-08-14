import * as CouponService from './service.js';

export const create = async (req, res) => {
  try {
    const coupon = await CouponService.createCoupon(req.body);
    res.status(201).json({ success: true, data: coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const data = await CouponService.getAllCoupons();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const validate = async (req, res) => {
  try {
    const { code } = req.body;

    const coupon = await CouponService.getCouponByCode(code);
    if (!coupon) {
      return res.status(400).json({ success: false, message: 'Invalid or expired coupon code' });
    }

    // Optionally check expiry
    if (coupon.expiryDate && coupon.expiryDate < new Date()) {
      return res.status(400).json({ success: false, message: 'Coupon expired' });
    }

    res.status(200).json({ success: true, data: coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await CouponService.deleteCoupon(req.params.id);
    res.status(200).json({ success: true, message: "Coupon deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const coupon = await CouponService.updateCoupon(req.params.id, req.body);
    res.status(200).json({ success: true, data: coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
