import express from 'express';
import { createBooking } from '../controller/bookingController';

const router = express.Router();

router.post('/', createBooking);


export default router;
