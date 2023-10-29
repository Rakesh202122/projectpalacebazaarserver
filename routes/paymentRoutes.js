import express from 'express'
import {isAuthenticated} from '../middlewares/auth.js'
import { buySubscription, getRazorPayKey, paymentverification } from '../controllers/paymentController.js'

const router = express.Router()

//buy subscription
router.route('/subscribe').get(isAuthenticated, buySubscription)

//verify payment and save referance in database
router.route('/paymentverification').post(isAuthenticated, paymentverification)

//get razorpay key
router.route('/razorpaykey').get(getRazorPayKey)

//cancel subscribtion
router.route('/subscribe/cancel').delete(isAuthenticated, )

export default router