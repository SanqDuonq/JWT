import express from "express";
import { body, validationResult } from "express-validator";
import {usersController} from '../controllers/index.controllers'
const route = express.Router();

route.get("/", (req, res) => {
  res.status(200).json("Sanqq");
});
route.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  usersController.login
);
route.post("/register", usersController.register);

export default route;
