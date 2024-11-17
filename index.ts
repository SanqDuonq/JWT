import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './database/connect-database';
import userRoutes from './routes/users.route'
import studentRoutes from './routes/students.route'
import CheckToken from './authentications/auth';

dotenv.config();

const port = process.env.PORT
const app = express();

app.use(express.json())
app.use(CheckToken)
// * routes
app.use('/users',userRoutes)
app.use('/students',studentRoutes)


app.listen(port,() => {
    connectDB()
    console.log(`Server is running on port ${port}`)
})

