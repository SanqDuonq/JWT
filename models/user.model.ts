import mongoose, { Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";

interface IUser {
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string
}

const userSchema:Schema<IUser>= new Schema({
    name: {
        type: String,
        require: true,
        validate: {
            validator: (value:string) => value.length > 3,
            message: 'User must be at least 3 characters'
        }
    },
    email: {
        type: String,
        require: true,
        validate: {
            validator: (value:string) => isEmail(value),
            message: 'User must be at least 3 characters'
        }
    },
    password: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
})

export const User = mongoose.model('User',userSchema)