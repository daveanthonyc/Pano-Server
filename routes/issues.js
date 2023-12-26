import express from 'express';
import { updateIssueById, createIssue, deleteIssueById, findAllIssuesBelongingToUserId } from '../controllers/issue.js';

const router = express.Router();

router.post("/create", createIssue);
router.post("/delete", deleteIssueById);
router.post("/update", updateIssueById);
router.post("/find", findAllIssuesBelongingToUserId);

export default router;
