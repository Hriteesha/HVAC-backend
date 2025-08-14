import {usermodel} from "./model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getLoginQuery, getAdminLoginQuery } from "../middleware/identifier.js";
import { validateUserRegistration } from "../middleware/validation.js";

export const register_user = async (data) => {
  validateUserRegistration(data);
  const { name, mob_no, email, password, user_type, organization_name, registration_number, status } = data;

  const existingUser = await usermodel.findOne({
    $or: [{ email }, { mob_no }],
  });
  if (existingUser) throw new Error("User Already Exists");

  const hashed_password = await bcrypt.hash(password, 10);

  const newuser = new usermodel({
    name,
    mob_no: user_type === "business" ? mob_no || null : mob_no,
    email,
    password: hashed_password,
    user_type,
    organization_name: user_type === "business" ? organization_name : undefined,
    registration_number: user_type === "business" ? registration_number : undefined,
    status,
  });

  await newuser.save();

  return {
    message: "User Created Successfully",
    user: {
      id: newuser._id,
      name: newuser.name,
      email: newuser.email,
      mob_no: newuser.mob_no,
      user_type: newuser.user_type,
      organization_name: newuser.organization_name,
      registration_number: newuser.registration_number,
      status: newuser.status,
    },
  };
};

export const login = async (data) => {
  const { identifier, password } = data;
  const query = getLoginQuery(identifier);
  console.log(query);
  const user = await usermodel.findOne(query).select("+password");
  if (!user) throw new Error("User doesn't exist");
  const ismatching = await bcrypt.compare(password, user.password);
  if (!ismatching) throw new Error("password is not correct,please try again");
  const token = jwt.sign({
    userId: user._id,
    name: user.name,
    email: user.email,
    user_type: user.user_type,
    organization_name: user.organization_name,
    status: user.status
  }, process.env.JWT_SECRET, { expiresIn: '1d' });

            return {message:"login successfull",token:token,
                user:{
                    id: user._id,
                    name:user.name,
                    email:user.email,
                    user_type:user.user_type,
                    organization_name:user.organization_name,
                    status:user.status
                }
            }

}
