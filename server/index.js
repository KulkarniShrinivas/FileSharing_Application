//const express  = require('express') old new we can import in EA6

import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(cors());
app.use('/',router);


DBConnection();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
