import { Request, Response } from 'express';

export const testFunction = (req: Request, res: Response) => {
  res.json({ message: 'Booking received' });
};

