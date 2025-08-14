
import mongoose, { mongo } from "mongoose";

const adminSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:[true,"email is required"],unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true,enum:["admin","user"],default:"admin"},
    status:{type:String,required:true,enum:["active","inactive"],default:"active"},
    isDeleted:{type: Boolean, default: false }},    
    {
        timestamps:true
    }
)

const admin = mongoose.model("admin",adminSchema)
export default admin