import adminmodel from "./model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//for create
export const create_admin = async (data) => {
    const { name, email, password,role } = data;
   const existing =await adminmodel.findOne({email})
   if(existing) throw new Error("Admin Already Exists")

    const hased_password = await bcrypt.hash(password,10)
    const newadmin = new adminmodel({
        name,
        email,
        password:hased_password,
        role
    })
    await newadmin.save()
    return {message :"Admin Created Successfully"}
}
//for login
export const login_admin =async (data) =>{
    const {email,password}= data;
    const admin = await adminmodel.findOne({email})
    if(!admin) throw new Error("Admin doesn't exist")
        const ismatching = await bcrypt.compare(password,admin.password)
    if(!ismatching) throw new Error("password is not correct,please try again")
        const token =jwt.sign({
           adminId:admin._id,
           name:admin.name,
           email :admin.email,
           role:admin.role
            },process.env.JWT_SECRET,{expiresIn:'1d'})

            return {message:"login successfull",token:token,
                admin:{
                    id: admin._id,
                    name:admin.name,
                    email:admin.email,
                    role:admin.role
                }
            }
}
//for getbyid
export const  get_admin = async(id) =>{
    const admin = await adminmodel.findById(id).select("-password")
    if(!admin) throw new Error("Admin doesn't exist")
    return admin
}

//get all list
export const  get_all_admin = async(id) =>{
    const admin = await adminmodel.find().select("-password")
    return admin
}

//update
export const update_admin = async(id,data) => {
    const admin = await adminmodel.findByIdAndUpdate(id,data,{new:true,runValidators:true})
    const adminobject= admin.toObject()
    delete adminobject.password
    return adminobject
}

//soft delete
export const delete_admin = async (id) => {
    const admin = await adminmodel.findById(id);
    if (!admin) {
        throw new Error("Admin doesn't exist");
    }
    if (admin.isDeleted === true) {
        return { message: "Admin was already deleted" };
    }
    admin.isDeleted = true;
    await admin.save();
    return { message: "Admin deleted successfully" };
};
//to restore
export const restore_admin = async (id) => {
    const admin = await adminmodel.findById(id);
    if (!admin) {
        throw new Error("Admin doesn't exist");
    }
    if (!admin.isDeleted) {
        return { message: "Admin is already active" };
    }
    admin.isDeleted = false; 
    await admin.save();
    return { message: "Admin restored successfully" };
};
