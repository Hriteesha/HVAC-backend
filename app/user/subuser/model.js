import mongoose from "mongoose";

const subUserSchema = new mongoose.Schema({
  business_user_id: {type: mongoose.Schema.Types.ObjectId,ref: "user", required: true,},
  name: { type: String, required: true },
  email: {type: String,required: [true, "Email is required"],unique:true},
  mobile: {type: String,required: true},
  role: {type: String,efault: "sub_user"},
  status: {type: String,enum: ["active", "inactive"],default: "active"},
  isDeleted: {type: Boolean,default: false}
}, { timestamps: true });

const SubUserModel = mongoose.model("subuser", subUserSchema);
export default SubUserModel;