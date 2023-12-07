import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
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
        })

        res.status(201).send('successful')
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};
