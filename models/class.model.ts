import mongoose, {  Schema } from "mongoose";

const classSchema: Schema = new Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        require: true,
        validate: {
            validator: (name:string) => name.length > 3,
            message: "Class's name must be at least 3 characters"
        }
    }
})

export default mongoose.model('Class',classSchema)