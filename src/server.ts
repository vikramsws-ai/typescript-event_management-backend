import express, { Request, Response } from 'express';
import eventRoutes from './routes/event.routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port: number = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the typescript backend!');
});

app.use('/api/event', eventRoutes);

app.listen(port, () => {
  console.log(`The server is currently running on ${port}`);
});
