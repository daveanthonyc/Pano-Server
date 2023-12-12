import express from 'express';
import { getProjects, createProject, getProjectsWithinId } from '../controllers/projects.js';

const router = express.Router();

router.get("/", getProjects);
router.post("/projects", getProjectsWithinId);
router.post("/", createProject);

export default router;
