import express from 'express';
import { getUser, getUserByName } from '../controllers/general.js';

const router = express.Router();

router.post("/user/", getUser);
router.get("/user/:userId", getUserByName);

export default router;
