import mongoose from 'mongoose';
import { ProjectSchema } from '../models/Project.js'
import { ObjectId } from 'mongodb';

const UserSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: false
    },
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    role: String,
    uniqueUserName: String,
    projects: {
        type: [ObjectId],
        required: false
    },
    issues: {
        type: [ObjectId],
        required: false
    }
});

const User = mongoose.model("User", UserSchema);
export default User;
