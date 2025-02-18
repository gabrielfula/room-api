import 'express-async-errors';
import express, { Express, RequestHandler } from 'express';
import cors from 'cors';
import routes from './routes/index';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/error.middleware';
import { authMiddleware } from './middleware/auth.middleware';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(authMiddleware as RequestHandler);

app.use('/v1', routes);

app.use(errorHandler);

export default app;