import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    package_name:{type:String,required:true},
    price:{type:String,required:true},
    description:{type:String,required:true},
    service_per_year:{type:String,required:true},
    servicesincluded:{type:Array},
    isDeleted:{type: Boolean, default: false }
},{timestamps:true})


const usersubcription =new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    package_id:{type:mongoose.Schema.Types.ObjectId,ref:"package",required:true},
    quantity:{type:Number,required:true,default:1},
    location:{type:String,required:true},
    durationMonths:{type:Number,required:true},
    start_date:{type:Date,required:true},
    end_date:{type:Date,required:true},
    status:{type:String,required:true,enum:["active","renewed","expired"],default:"active"},
    isDeleted:{type: Boolean, default: false }
},{timestamps:true})

export const packagesmodel = mongoose.model("package",packageSchema)
export const usersub = mongoose.model("usersubscription",usersubcription)
