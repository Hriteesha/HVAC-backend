import express from 'express'
import { create, listByUser, updateStatus, deleteRequest } from './controller.js'

const router = express.Router()

router.post('/create/:id', create)
router.get('/user/:userId', listByUser)
router.put('/update/:id', updateStatus)
router.delete('/delete/:id', deleteRequest)

export default router
