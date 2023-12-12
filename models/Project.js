import mongoose, { SchemaTypes } from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
    projectTitle: String,
    identifier: String,
    description: {
        type: String,
        required: false
    },
    users: [{ type: SchemaTypes.ObjectId, ref: 'User'}],
    issues: {
        type: [{ type: SchemaTypes.ObjectId, ref: 'Issue'}],
        required: false
    },
    creationDate: Date
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
