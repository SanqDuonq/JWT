import bcrypt from "bcrypt";
import { User } from "../models/user.model";
import jwt from 'jsonwebtoken'
const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  const existUser = await User.findOne({ email }).exec();
  if (existUser) {
    const isMatch = await bcrypt.compare(password, existUser.password);
    if (isMatch) {
      const accessToken = jwt.sign({data: existUser},process.env.JWT_SECRET as string,{expiresIn: '15s'})
      return {
        ...existUser.toObject(),
        password: 'Not Shown',
        accessToken: accessToken
      }
    }
    else {
      throw new Error ('Wrong email or password')
    }
  }
  else {
    throw new Error('Wrong email or password')
  }
};

const register = async ({
  name,
  email,
  password,
  phoneNumber,
  address,
}: {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}) => {
  try {
    const existUser = await User.findOne({ email }).exec();
    if (existUser) {
      throw new Error("User is exist");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phoneNumber,
      address,
    });
    await newUser.save();
    const { password: _, ...user } = newUser.toObject();
    return user;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

export default {
  login,
  register,
};
