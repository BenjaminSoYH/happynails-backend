import express from 'express';
import bookingsRouter from './route/bookings';
import testRouter from './route/testRouter';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/bookings', bookingsRouter);
app.use('/test', testRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
