import express from "express";
import studentsControllers from "../controllers/students.controllers";
const route = express.Router();

route.get("/", studentsControllers.getAllStudent);

route.get("/:id", studentsControllers.getStudentById);

route.post("/insert", studentsControllers.insertStudent);

route.patch("/", studentsControllers.updateStudent);

export default route;
