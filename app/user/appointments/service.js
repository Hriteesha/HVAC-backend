import { appointmentModel } from "./model.js";
import Technician from "../../technician/model.js";

export const book = async (userId, { date, time_slot, service_type, address }) => {

  const technician = await Technician.findOne({
    services: { $regex: new RegExp(`^${service_type}$`, "i") },
    status: "active",
    is_verified: true
  });

  if (!technician) {
    throw new Error("No available technician found");
  }

  const exists = await appointmentModel.findOne({
    technician_id: technician._id,
    date,
    time_slot,
    status: { $in: ["pending", "confirmed"] }
  });

  if (exists) {
    throw new Error("This time slot is already booked for the technician.");
  }


  const newAppointment = new appointmentModel({
    user_id: userId,
    technician_id: technician._id,
    date,
    time_slot,
    service_type,
    address, 
    status: "pending"
  });

  return await newAppointment.save();
};

const getUpcoming = async (userId) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  return await appointmentModel.find({
    user_id: userId,
    date: { $gte: today },
    status: { $in: ["pending", "confirmed"] } 
  }).sort({ date: 1 });
};

const  get_all_appointments = async (userId) => {
  return await appointmentModel.find({ user_id: userId }).sort({ date: -1 });
};
 
const get_appointments_by_technician = async (technician_id) => {
  return await appointmentModel.find({ technician_id }).sort({ date: -1 });
}
const delete_appointment = async (id) => {
  return await appointmentModel.findByIdAndDelete(id)
}
export default {
  book,
  getUpcoming,
  get_all_appointments,
  get_appointments_by_technician,
  delete_appointment
};
