import express, { Request, Response } from "express";

const app = express();
const port: number = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the typescript backend !");
});

app.listen(port, () => {
  console.log(`The server is currently running on ${port}`);
});
