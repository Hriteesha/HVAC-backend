import PaymentService from './service.js';

export const getDuePayments = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const duePayments = await PaymentService.getDuePayments(userId);
    res.status(200).json({ data: duePayments });
  } catch (err) {
    res.status(500).json({  message: err.message });
  }
};

export const payDueAmount = async (req, res) => {
  try {
    const { id } = req.body;
    const payment = await PaymentService.updateStatusToPaid(id);

    if (!payment) {
      return res.status(404).json({  message: "Payment not found" });
    }

    payment.status = "paid";
    await payment.save();

    return res.status(200).json({ message: "Payment successful", data: payment });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

