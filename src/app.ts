import express from 'express';
import cors from 'cors';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.set('trust proxy', 1);

app.use('/api', cors(), routes);

export default app;
