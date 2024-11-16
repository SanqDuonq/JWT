import express from 'express'
import dotenv from 'dotenv'
import { studentRoutes, userRoutes } from './routes/index.route';

dotenv.config();

const port = process.env.PORT
const app = express();

app.use(express.json())
// * routes
app.use('/users',userRoutes)
app.use('/students',studentRoutes)


app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})

