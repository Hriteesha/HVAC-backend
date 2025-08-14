import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['due', 'paid'], default: 'due' },
  createdAt: { type: Date, default: Date.now },
  paidAt: { type: Date }
});

export default mongoose.model('Payment', paymentSchema);
