import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
        const { targetEmail, targetPassword } = req.body;
        const user = await User.findOne({ 
            email: targetEmail,
            password: targetPassword,
        });

        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export const getUserByName = async (req, res) => {
    try {
        const targetUser = req.params.userId;
        const user = await User.findOne({ uniqueUserName: targetUser });

        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export const createUser = async (req, res) => {
    try {

        await User.create({
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            uniqueUserName: req.body.uniqueUserName,
        })

        res.status(201).send('successful')
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};
