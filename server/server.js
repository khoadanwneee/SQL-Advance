import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin/index.route.js';
import clientRoutes from './routes/client/index.route.js';
import { db } from './config/db.config.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

db.raw("select now()")
  .then(r => console.log("DB connected:", r.rows?.[0] || r))
  .catch(err => console.error("DB connect error:", {
    code: err.code,
    message: err.message,
    address: err.address,
    port: err.port
  }));

app.use(cors());

app.use(bodyParser.json()); 

app.use('/admin', adminRoutes);

app.use('/', clientRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});