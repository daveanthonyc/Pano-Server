import express from 'express';
import { updateIssueById, createIssue, deleteIssueById } from '../controllers/issue.js';

const router = express.Router();

router.post("/create", createIssue);
router.post("/delete/", deleteIssueById);
router.post("/update/", updateIssueById);

export default router;
