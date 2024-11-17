import express from "express";
import { body } from "express-validator";
import usersControllers from "../controllers/users.controllers";
const route = express.Router();

route.get("/", (req, res) => {
  res.status(200).json("Sanqq");
});
route.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  usersControllers.login
);
route.post("/register", usersControllers.register);

export default route;
