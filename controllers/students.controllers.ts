import { Request, Response } from "express";
import { Student } from '../models/student.model';
import studentsRepository from "../repositories/students.repository";

async function getAllStudent(req: Request, res: Response) {
  res.status(200).json({
    message: "Get students successful",
    data: [
      {
        name: "Sang",
        email: "namsang0902s@gmail.com",
        age: 18,
      },
      {
        name: "Nguyen",
        email: "namsang0902s@gmail.com",
        age: 18,
      },
      {
        name: "Nhan",
        email: "namsang0902s@gmail.com",
        age: 18,
      },
    ]
  });
}

async function getStudentById(req: Request, res: Response) {}

async function updateStudent(req: Request, res: Response) {}

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
};
