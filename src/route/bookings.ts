import express from 'express';
import { createBooking, testRoute } from '../controller/bookingController';

const router = express.Router();

router.post('/', createBooking);
router.get('/test', testRoute);


export default router;
