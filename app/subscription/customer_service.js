import {usersub} from "./model.js"
import {packagesmodel} from "./model.js"
import {usermodel} from "../user/model.js"
import mongoose from "mongoose";
import {CouponModel} from "../cupon/model.js"

const subscriptionPlans = {
  "Basic Plan": 6999,
  "Standard Plan": 9999,
  "premium Plan": 19999
};

const buy_package = async (req, res) => {
  try {
    const { planName, couponCode } = req.body;
    const userId = req.user.id; // assuming you're using auth middleware

    
    const originalPrice = subscriptionPlans[planName];
    if (!originalPrice) {
      return res.status(400).json({ success: false, message: "Invalid plan selected" });
    }

    let discountAmount = 0;
    let finalAmount = originalPrice;

    if (couponCode) {
      const coupon = await CouponModel.findOne({ code: couponCode, isActive: true });

      if (!coupon) {
        return res.status(400).json({ success: false, message: "Invalid or expired coupon code" });
      }
      discountAmount = (originalPrice * coupon.discountPercentage) / 100;
      finalAmount = originalPrice - discountAmount;
    }

  

    return res.status(200).json({
      success: true,
      message: "Subscription successful",
      data: {
        plan: planName,
        originalPrice,
        discountAmount,
        finalAmount,
        couponCode: couponCode || null,
      },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Internal server error", error: err.message });
  }
};


const renew_package = async (id, durationMonths = 12) => {
  console.log("Received ID:", id);
  const objectId = new mongoose.Types.ObjectId(id);
  console.log("Converted ObjectID:", objectId);
  const subscription = await usersub.findById(objectId);
  if (!subscription) {
    console.log("Subscription not found");
    throw new Error("Subscription doesn't exist");
  }
 console.log("Subscription found:", subscription);
 const start_date = new Date();
  const end_date = new Date(start_date);
  end_date.setMonth(end_date.getMonth() + durationMonths);

  subscription.start_date = start_date;
  subscription.end_date = end_date;

  if (subscription.status === "active") {
    subscription.status = "renewed";
  }

  const result = await subscription.save();
  console.log("Subscription renewed");

  return {
    message: "Subscription renewed successfully",
    data: result,
  };
};


const get_subcriptions= async(userId)=>{
    const result= await usersub.findById(userId).populate("package_id")
}




export {buy_package,renew_package,get_subcriptions}
