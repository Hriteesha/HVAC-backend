import express from 'express';
import * as CouponController from './controller.js';

const cuponrouter = express.Router();

cuponrouter.post('/', CouponController.create);          
cuponrouter.get('/getall', CouponController.getAll);              
cuponrouter.post('/validate', CouponController.validate);   
cuponrouter.put('/:id', CouponController.update);         
cuponrouter.delete('/:id', CouponController.remove);        
export default cuponrouter;
