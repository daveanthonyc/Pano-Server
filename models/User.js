import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
});

const User = mongoose.model("User", UserSchema);
export default User;
