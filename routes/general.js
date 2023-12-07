import express from 'express';
import { getUser, createUser } from '../controllers/general.js';

const router = express.Router();

router.get("/user/:id", getUser);
router.post('/user/', createUser);

export default router;
