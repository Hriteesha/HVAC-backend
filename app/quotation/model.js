import mongoose from 'mongoose'

const quotationSchema = new mongoose.Schema({
  serviceRequestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Request' },
  technicianId: { type: mongoose.Schema.Types.ObjectId, ref: 'Technician' },
  items: [
    {
      name: String,
      price: Number,
      description: String
    }
  ],
  total: Number,
  notes: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
}, { timestamps: true })

const Quotation = mongoose.model('Quotation', quotationSchema)
export default Quotation
