import Issue from "../models/Issue.js";
import User from "../models/User.js";
import Project from "../models/Project.js";

export const deleteIssueById = async (req, res) => {
    try {
        const user = await Issue.findByIdAndDelete(req.body.idToDelete);

        if (user) {
            res.status(200).json({ user: "User deleted" });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export const findAllIssuesBelongingToUserId = async (req, res) => {
    const targetId = req.body.id;
        console.log(targetId);
    try {
        const issues = await Issue.find({ user: targetId });
        res.status(200).json({ message: issues})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export const findAllIssuesBelongingToProjectId = async (req, res) => {
    try {
        const user = await Issue.findByIdAndDelete(req.body.idToDelete);

        if (user) {
            res.status(200).json({ user: "User deleted" });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export const updateIssueById = async (req, res) => {
    try {
        const response = await Issue.findByIdAndUpdate(req.body.issueId,
        {
            title: req.body.title,
            description: req.body.description,
            state: req.body.state,
            priorityLevel: req.body.priorityLevel,
            startDate: req.body.startDate,
            dueDate: req.body.dueDate,
            users: req.body.users,
            project: req.body.project,
        })


        if (response) {
            res.status(200).json({ response });
        } else {
            res.status(404).json({ message: 'Issue not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export const createIssue = async (req, res) => {
    try {
        const newIssue = await Issue.create({
            title: req.body.title,
            description: req.body.description,
            state: req.body.state,
            priorityLevel: req.body.priorityLevel,
            startDate: req.body.startDate,
            dueDate: req.body.dueDate,
            user: req.body.user,
            project: req.body.project,
            creationDate: req.body.creationDate,
        })
        // make issue belong to user
        const foundUser = await User.findByIdAndUpdate(
            req.body.user, 
            {
                $push: {
                    issues: newIssue._id,
                }
            }, 
            { new: true }
        );
        const foundProject = await Project.findByIdAndUpdate(
            req.body.project, 
            {
                $push: {
                    issues: newIssue._id,
                }
            }, 
            { new: true }
        );
        res.status(201).send(`Successful updating of user: ${foundUser} and project: ${foundProject}`);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};
