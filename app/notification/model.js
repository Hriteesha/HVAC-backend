import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  technicianId: { type: mongoose.Schema.Types.ObjectId, ref: 'Technician' },
  message: String,
  read: { type: Boolean, default: false },
  type: String
}, { timestamps: true })

const Notification = mongoose.model('Notification', notificationSchema)
export default Notification
