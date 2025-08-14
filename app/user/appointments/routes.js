import express from "express";
import {
  bookAppointment,
  getUpcomingAppointments,
  get_all_appointments  ,
  cancel_appointment,
  get_appointment_by_id
} from "./controller.js";


const router = express.Router();

router.post("/book/:id", bookAppointment);
router.get("/upcoming/:id", getUpcomingAppointments);
router.get("/all/:id",get_all_appointments);
router.get("/technician/:id", get_appointment_by_id);
router.put("/cancel/:id", cancel_appointment);

export default router;
