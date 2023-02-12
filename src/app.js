import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import testRoute from './api/routes/test.js';

dotenv.config();

const dirname = path.resolve();

const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

app.use('/test', testRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running'));
