import express from 'express';
import { writeAiExpansion } from '../controllers/ai.js'

const router = express.Router();

router.post("/prompt", writeAiExpansion);

export default router;
