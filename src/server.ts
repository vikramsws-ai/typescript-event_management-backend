import 'dotenv/config';
import express, { Request, Response } from 'express';
import eventRoutes from './routes/event.routes.js';

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the typescript backend!');
});

app.use('/api/events', eventRoutes);

app.listen(port, () => {
  console.log(`The server is currently running on ${port}`);
});
