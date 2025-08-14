import mongoose from "mongoose";

const TechniciamSchema = new mongoose.Schema({
    name:{type:String,required:true},
    mob_no:{type:String,required:true},
    email:{type:String,required:[true,"Email is required"],unique:true},
    password:{type:String,required:true},
    user_type:{type:String,required:true,enum:["technician"],default:"technician"},
    total_rating:{type:Number,default:0},
    avg_rating:{type:Number,default:0},
    services: { type: [String], required: true },
    is_verified:{type: Boolean, default: true },
    status:{type:String,required:true,enum:["active","inactive"],default:"active"},
    profile_picture:{type:String},
    isDeleted:{type: Boolean, default: false }
},{timestamps:true})

const Technician = mongoose.model("technician",TechniciamSchema)
export default Technician