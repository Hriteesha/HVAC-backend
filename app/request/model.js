import mongoose from 'mongoose'

const requestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  address: String,
  mapLocation: String,
  contactNo: String,
  requestType: String,
  preferredDate: Date,
  preferredTimeSlot: String,
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
  status: { type: String, enum: ['pending', 'assigned', 'completed', 'cancelled'], default: 'pending' }
}, { timestamps: true })

const Request = mongoose.model('Request', requestSchema)
export default Request
