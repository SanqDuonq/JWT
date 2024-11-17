import userModel from "../models/user.model";
import bcrypt from 'bcrypt'
const login = async ({email,password}: {email: string, password: string;}) => {
  console.log("login user in user repository");
};

const register = async ({name,email,password,phoneNumber,address}: {name: string;email: string;password: string;phoneNumber: string;address: string;}) => {
  try {
    const existUser = await userModel.findOne({email}).exec()
    if (existUser) {
      throw new Error('User is exist')
    }
    const hashPassword = await bcrypt.hash(password,10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashPassword,
      phoneNumber,
      address,
    })
    await newUser.save()
    const {password: _,...user} = newUser.toObject()
    return user;

  } catch (error) {
    console.log('Error',error)
    throw error
  }
};

export default {
  login,
  register,
};
