import { Request, Response } from 'express';

export const createBooking = (req: Request, res: Response) => {
  const { name, time } = req.body;
  // You'd normally store this in a DB
  res.json({ message: 'Booking received', name, time });
};

export const testRoute = (req: Request, res: Response) => {
  res.json({ message: 'Test route is working!' });
}