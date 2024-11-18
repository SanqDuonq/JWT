import mongoose from "mongoose";
import { Student } from "../models/student.model";

const getAllStudent = async ({ page, size, searchString }: {page:number,size:number,searchString:string}) => {
  console.log("Get all student");
};

const insertStudent = async ({name,email,language,gender,phone,address}: {name:string,email:string,language:string,gender:string,phone:string,address:string}) => {
    try {
      const student = await Student.create({
        name,email,language,gender,phone,address
      })
       
    } catch (error) {
      const errorValid = error instanceof mongoose.Error.ValidationError
      throw new Error(`Fail insert student ${errorValid}`)
    }
}

export default {
    getAllStudent,
    insertStudent
}
