import mongoose, { Schema } from "mongoose";
import { isMobilePhone } from "validator";
import isEmail from "validator/lib/isEmail";

const studentSchema: Schema = new Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        require: true,
        validate: {
            validator: (name:string) => name.length > 3,
            message: 'Must be at least 3 characters'
        }
    },
    email: {
        type: String,
        require: true,
        validate: {
            validator: (email:string) => isEmail(email),
            message: 'Email is incorrect format'
        }
    },
    languages: {
        type: [String]
    },
    gender: {
        type: String,
        require: true,
        enum: {
            values: ['Male', 'Female'],
            message: '{value} is not supported'
        }
    },
    phoneNumber: {
        type: String,
        require: true,
        validate: {
            validator: (phoneNumber:string) => isMobilePhone(phoneNumber,'vi-VN'),
            message: 'Must be phone at least 10 numbers'
        }
    },
    address: {
        type: String,
        require: true
    }
})

export const Student = mongoose.model('Student',studentSchema)