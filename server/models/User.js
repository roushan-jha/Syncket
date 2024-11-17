import { genSalt, hash } from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "User must have an email."]
    },
    password: {
        type: String,
        required: [true, "User must have a password."]
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    color: {
        type: Number,
        required: false
    },
    profileSetup: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save', async function(next) {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
})

const User = mongoose.model('User', userSchema);

export default User;