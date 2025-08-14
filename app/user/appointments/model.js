import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  technician_id: { type: mongoose.Schema.Types.ObjectId, ref: "technician" },
  service_type: { type: String, required: true },
  date: { type: Date, required: true 
  },
  time_slot: { type: String, required: true 
  },
  address: { type: String, required: true 
  },
  status: { 
    type: String, 
    enum: ["pending", "confirmed", "completed", "cancelled"], 
    default: "pending" 
  },
  notes: { 
    type: String 
  },
  is_rescheduled: { 
    type: Boolean, 
    default: false 
  },
  payment_status: { 
    type: String, 
    enum: ["pending", "paid"], 
    default: "pending" 
  }
}, { timestamps: true });

export const appointmentModel = mongoose.model("appointment", appointmentSchema);
