require('dotenv').config();

import express from 'express';
import bodyPaser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyPaser.json());

app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
