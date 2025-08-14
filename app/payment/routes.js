import express from 'express';
import { getDuePayments, payDueAmount } from './controller.js';

const paymentrouter = express.Router();

paymentrouter.get('/due/:id', getDuePayments);
paymentrouter.post('/pay', payDueAmount);

export default paymentrouter;
