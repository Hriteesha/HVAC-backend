import Technician from "./model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const create_technician = async (data) => {
    const { name, mob_no, email, password, user_type, services, total_rating, avg_rating, is_verified, status, profile_picture, isDeleted } = data;
    const existing = await Technician.findOne({ email });
    if (existing) throw new Error("Technician Already Exists");
    const hashed = await bcrypt.hash(password, 10);
    const technician = new Technician({
        name,
        mob_no,
        email,
        password: hashed,
        user_type,
        services,
        total_rating,
        avg_rating,
        is_verified,
        status,
        profile_picture,
        isDeleted
    
    })
    await technician.save();
    return { message: "Technician Created Successfully" };

}

export const technician_login = async (data) => {
    const { email, password } = data;
    const technician = await Technician.findOne({ email });
    if (!technician) throw new Error("Technician doesn't exist");
    const ismatching = await bcrypt.compare(password, technician.password);
    if (!ismatching) throw new Error("password is not correct,please try again");
    const token = jwt.sign({
        userId: technician._id,
        name: technician.name,
        email: technician.email,
        user_type: technician.user_type,
        total_rating: technician.total_rating,
        avg_rating: technician.avg_rating,
        is_verified: technician.is_verified,
        status: technician.status,
        profile_picture: technician.profile_picture,
        isDeleted: technician.isDeleted
    }, process.env.JWT_SECRET);
    return { message: "login successfull", token: token, technician: {
        id: technician._id,
        name: technician.name,
        email: technician.email,
        user_type: technician.user_type,
        total_rating: technician.total_rating,
        avg_rating: technician.avg_rating,
        is_verified: technician.is_verified,
        status: technician.status,
        profile_picture: technician.profile_picture,
        isDeleted: technician.isDeleted
    } };
}

export const get_all_technicians = async () => {
    const technicians = await Technician.find();
    return { technicians };

}

export const get_technician = async (id) => {
    const technician = await Technician.findById(id);
    if (!technician) throw new Error("Technician doesn't exist");
    return { technician };
}

export const update_technician = async (id, data) => {
    const { name, mob_no, email, password, user_type, total_rating, avg_rating, is_verified, status, profile_picture, isDeleted } = data;
    const technician = await Technician.findById(id);
    if (!technician) throw new Error("Technician doesn't exist");
    const hashed = await bcrypt.hash(password, 10);
    technician.name = name;
    technician.mob_no = mob_no;
    technician.email = email;
    technician.password = hashed;
    technician.user_type = user_type;
    technician.total_rating = total_rating;
    technician.avg_rating = avg_rating;
    technician.is_verified = is_verified;
    technician.status = status;
    technician.profile_picture = profile_picture;
    technician.isDeleted = isDeleted;
    await technician.save();
    return { message: "Technician Updated Successfully" };
}

export const delete_technician = async (id) => {
    const technician = await Technician.findById(id);
    if (!technician) throw new Error("Technician doesn't exist");
    if(technician.isDeleted === true) return {message:"Technician was already deleted"}
    technician.isDeleted = true
    await technician.save();
    return { message: "Technician Deleted Successfully" };
}

export const restore_technician = async (id) => {
    const technician = await Technician.findById(id);
    if (!technician) throw new Error("Technician doesn't exist");
    if(technician.isDeleted === false) return {message:"Technician was already restored"}
    technician.isDeleted = false
    await technician.save();
    return { message: "Technician Restored Successfully" };
}

