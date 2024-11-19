import mongoose from "mongoose";
import { Student } from "../models/student.model";

const getAllStudent = async ({ page, size, searchString }: {page:number,size:number,searchString:string}) => {
  let filterStudent = await Student.aggregate([
    {
      $match : {
          $or: [
            {
              name: { $regex: `.*${searchString}.*`,$options: 'i'}
            },
            {
              email: { $regex: `.*${searchString}.*`,$options: 'i'}
            }
          ]
      }
    },
    {
      $skip: (page - 1) * size
    },
    {
      $limit: size
    }
  ])
  return filterStudent
};

const getDetailStudent = async({studentId}: {studentId: string}) => {
  const student = await Student.findById(studentId)
  return student ?? {}
}

const insertStudent = async ({name,email}: {name:string,email:string}) => {
    try {
      const student = await Student.create({
        name,email
      })
      return student
    } catch (error) {
      const errorValid = error instanceof mongoose.Error.ValidationError
      throw new Error(`Fail insert student ${errorValid}`)
    }
}
const updateStudent = async({id,name}: {id:string,name:string}) => {
  const student = await Student.findById(id)
  if (!student)
    throw new Error(`Student with ID: ${id} not found`)
  student.name = name ?? student.name
  await student.save();
  return student
}
export default {
    getAllStudent,
    insertStudent,
    getDetailStudent,
    updateStudent
}
