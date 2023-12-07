/* IMPORTS */
import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose';
import generalRoutes from './routes/general.js'
import User from './models/User.js';
import cors from 'cors';

/* CONFIG */
env.config();
const app = express();
app.use(express.json());
app.use(cors())

/* ROUTES */
app.use('/general', generalRoutes);

/* MONGOOSE SETUP */
mongoose.connect(process.env.CONNECTION_STRING);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
})
