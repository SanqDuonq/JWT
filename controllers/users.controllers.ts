import { Request, Response } from "express";
import { validationResult } from "express-validator";
import {
  usersRepository,
  studentsRepository,
} from "../repositories/index.repository";

const login = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  await usersRepository.login({ email, password });
  res.status(200).json({
    message: "Login successful",
    data: [
      {
        email,
        password,
      },
    ],
  });
};

const register = async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber, address } = req.body;
  await usersRepository.register({name,email,password,phoneNumber,address})
  res.status(200).json({
    message: "Register successful",
  });
};

const getDetailUser = async (req: Request, res: Response) => {};

export default {
  login,
  register,
  getDetailUser,
};
