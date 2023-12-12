/* IMPORTS */
import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose';
import generalRoutes from './routes/general.js'
import projectRoutes from './routes/projects.js'
import issueRoutes from './routes/issues.js'
import cors from 'cors';

/* CONFIG */
env.config();
const app = express();
app.use(express.json());
app.use(cors())

/* ROUTES */
app.use('/general', generalRoutes);
app.use('/project', projectRoutes);
app.use('/issue', issueRoutes);

/* MONGOOSE SETUP */
mongoose.connect(process.env.CONNECTION_STRING);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
})
