import express, { Express } from 'express';
import cors from 'cors';
import routes from "./routes/index";

const app: Express = express();

app.use(cors());

app.use('/v1', routes);

app.use(express.json());

export default app;