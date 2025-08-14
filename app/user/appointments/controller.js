import AppointmentService from "./service.js";


export const bookAppointment = async (req, res) => {
  try {
   const { id: userId } = req.params; 
    const payload = req.body;

    const result = await AppointmentService.book(userId, payload);

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: result,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getUpcomingAppointments = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(400).json({
        message: "userId is required",
      });
    }

    const appointments = await AppointmentService.getUpcoming(userId);

    return res.status(200).json({
      data: appointments,
    });
  } catch (error) {
    return res.status(500).json({message: "Internal server error", error: error.message });
  }
};


export const get_all_appointments = async (req, res) => {
  try {
    const userId = req.query.userId;
    if(!userId){
      return res.status(400).json({ message: "user_id is required" });
    }
    const appointments = await AppointmentService.get_all_appointments(userId);
    res.status(200).json({ data: appointments });
  } catch (err) {
    res.status(500).json({message: err.message });
  }
};

export const cancel_appointment = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await AppointmentService.cancel_appointment(id);
    res.status(200).json({ success: true, message: "Appointment cancelled", data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export const get_appointment_by_id = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await AppointmentService.get_appointments_by_technician(id);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}