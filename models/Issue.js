import mongoose from 'mongoose';

const IssueSchema = new mongoose.Schema({
    title: String,
    description: {
        type: String,
        required: false
    },
    state: String,
    priorityLevel: {
        type: String,
        required: false
    },
    startDate: {
        type: String,
        required: false
    },
    dueDate: {
        type: String,
        required: false
    },
    user: String,
    project: String,
    creationDate: Date
});

const Issue = mongoose.model("Issue", IssueSchema);
export default Issue;
