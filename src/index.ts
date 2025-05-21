import express from 'express';
import bookingsRouter from './route/bookings';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/bookings', bookingsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
