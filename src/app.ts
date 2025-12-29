import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index';
import { swagger } from './docs/swagger';

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.set('trust proxy', 1);

swagger(app);
app.use('/api', cors(), routes);

export default app;
