import express, { Express } from 'express';
import cors from 'cors';
import routes from "./routes/index";
import bodyParser from 'body-parser';

const app: Express = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/v1', routes);

export default app;