import express from 'express'

const route = express.Router()

route.get('/',(req,res) => {
    res.status(200).json('students')
})
route.get('/:id',(req,res) => {
    const data = req.params.id
    res.status(200).json({message: `Get student by ${data}`,data})
})
route.post('/insert',(req,res) => {
    res.status(200).json('insert')
})
route.patch('/',(req,res) => {
    res.status(200).json('patch(create new object if not exists ')
})
export default route