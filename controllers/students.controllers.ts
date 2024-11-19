import { Request, Response } from "express";
import { Student } from '../models/student.model';
import studentsRepository from "../repositories/students.repository";
import { MAX_RECORD } from "../global/constants";

async function getAllStudent(req: Request, res: Response) {
  let {page = 1, size = MAX_RECORD,searchString = ''} = req.query
  const numericPage = parseInt(page as string, 10) || 1;
  const numericSize = parseInt(size as string, 10) > MAX_RECORD ? MAX_RECORD : parseInt(size as string, 10) || MAX_RECORD;
  let filterStudent = await studentsRepository.getAllStudent({
    page:numericPage,size:numericSize,searchString:searchString as string
  })
  res.status(200).json({
    message: 'Get all students',
    page,
    size: filterStudent.length, 
    searchString,
    data: filterStudent
  });
}

async function getStudentById(req: Request, res: Response) {
  const {id} = req.params
  try {
    const student = await studentsRepository.getDetailStudent({studentId:id})
    res.status(200).json({
      message: 'Get student successful',
      data: student
    })
  } catch (error) {
    res.status(401).json({
      message: 'Get student fail',
      error: error
    })
  }
}

async function updateStudent(req: Request, res: Response) {
  const {id} = req.params
  const {name} = req.body
  try {
    const student = await studentsRepository.updateStudent({id:id,name:name})
    res.status(200).json({
      message: 'Update student successful',
      data: student
    })
  } catch (error) {
    res.status(404).json(({
      message: 'Not found student',
      error: error
    }))
  }
}

async function deleteStudent(req:Request,res: Response) {
  const {id} = req.params
  try {
    const student = await Student.findByIdAndDelete(id)
    res.status(201).json({
      message: 'Delete successful',
      data: student
    })
  } catch (error) {
    res.status(401).json({
      message: 'Delete fail',
      error: error
    })
  }
}

async function insertStudent(req: Request, res: Response) {
  try {
    const student = await studentsRepository.insertStudent(req.body)
    res.status(200).json({message: 'Insert student successful', data: student})
  } catch (error) {
    res.status(500).json({message: "Cannot insert student", error: error instanceof Error ? error.message : ''})
  }
}

export default {
  getAllStudent,
  getStudentById,
  updateStudent,
  insertStudent,
  deleteStudent
};
