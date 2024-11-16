import { Request, Response } from "express";

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

async function insertStudent(req: Request, res: Response) {}

export default {
  getAllStudent,
  getStudentById,
  updateStudent,
  insertStudent,
};
