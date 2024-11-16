import express from "express";
import { studentsController } from "../controllers/index.controllers";
const route = express.Router();

route.get("/", studentsController.getAllStudent);

route.get("/:id", studentsController.getStudentById);

route.post("/insert", studentsController.insertStudent);

route.patch("/", studentsController.updateStudent);

export default route;
