import Payment from './model.js';

const getDuePayments = async (userId) => {
  return await Payment.find({ userId, status: 'due' });
};

const payAmount = async (userId, paymentId, amount) => {
   const { id } = req.body;

    const payment = await paymentModel.findById(id);if (!payment) {
  return res.status(404).json({ success: false, message: "Payment not found" });
}

  if (payment.status === 'paid') throw new Error('Already paid');
  if (payment.amount !== amount) throw new Error('Incorrect amount');

  payment.status = 'paid';
  payment.paidAt = new Date();
  await payment.save();

  return payment;
};

const findById = async (id) => {
  return await payment.findById(id);
};

const updateStatusToPaid = async (id) => {
  const payment = await payment.findById(id);
  if (!payment) return null;

  payment.status = "paid";
  return await payment.save();
};
export default {
  getDuePayments,
  payAmount,
  findById,
  updateStatusToPaid
};
