import express from 'express';
import { testFunction } from '../controller/testController';

const router = express.Router();
router.get('/', testFunction); 


export default router;
