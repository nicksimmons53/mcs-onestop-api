import express, { Request, Response } from 'express';
import * as dotenv from "dotenv";
import routes from "./clients";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use("/client", routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});