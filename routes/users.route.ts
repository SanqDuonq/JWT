import express from "express";
import { body, validationResult } from "express-validator";
const route = express.Router();

route.get("/", (req, res) => {
  res.status(200).json("Sanqq");
});
route.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).json({error: error.array()}) 
    }
    const { email, password } = req.body;
    res.status(200).json({ email, password });
  }
);
route.post("/register", (req, res) => {
  res.status(200).json("Hehe");
});

export default route;
