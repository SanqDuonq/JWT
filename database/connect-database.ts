import mongoose from 'mongoose'
export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI as string)
        console.log(`Connect successful ${connect.connection.host}`)
    } catch (error) {
        console.log(`Cannot connect ${error}`)
    }
}
