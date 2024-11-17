import mongoose, { Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";

const userSchema:Schema = new Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
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

export default mongoose.model('User',userSchema)