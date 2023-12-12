import Project from "../models/Project.js";
import User from "../models/User.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createProject = async (req, res) => {
    try {
        const newProject = await Project.create({
            projectTitle: req.body.projectTitle,
            identifier: req.body.identifier,
            description: req.body.description,
            users: req.body.users,
            issues: req.body.issues,
            creationDate: req.body.creationDate
        });
        const response = await User.findByIdAndUpdate(
            req.body.userId, 
            {
                $push: {
                    projects: newProject._id,
                }
            }, 
            { new: true }
        );
        if (response) {
            res.json({message: `project should be added to id ${req.body.userId}`});
        }
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
};

export const getProjectsWithinId = async (req, res) => {
    try {
        const ids = req.body.ids;
        const documents = await Project.find({ _id: { $in: ids }});
        res.json(documents);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
};
