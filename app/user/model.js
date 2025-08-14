import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    mob_no:{type:String,required:true},
    email:{type:String,required:[true,"Email is required"],unique:true},
    password:{type:String,required:true},
    referal_code:{type:String},
    user_type:{type:String,required:true,enum:["individual","business"],default:"individual"},
    organization_name:{type:String},
    profile_picture:{type:String},
    is_verified:{type: Boolean, default: true },
    status:{type:String,required:true,enum:["active","inactive"],default:"active"},
    isDeleted:{type: Boolean, default: false }
},{timestamps:true})

export const usermodel = mongoose.model("user",userSchema)
