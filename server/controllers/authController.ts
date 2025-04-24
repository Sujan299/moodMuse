import {Request, Response, NextFunction} from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../prisma/client';
interface SignupData {
    username: string;
    email: string;
    password: number;
    dob: Date;
}
export const signup = async (req: Request<{}, {}, SignupData >, res: Response, next: NextFunction)=>{
    const {username,email, password, dob} = req.body;
    const existingUser = await prisma.user.findUnique({where : {email}});
    if(existingUser){
        return res.status(401).json({message: "User already exist!"})
    }
    // if email is already exist then return from here directly.
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
        data:{
            username,
            email,
            password: hashPassword,
            dob
        }
    })
    res.status(201).json({message: "User created successfully" + newUser.id})
}
interface loginBody{
    email: string;
    password: string;
}
export const login = async (req: Request<{},{},loginBody>, res: Response)=>{
    const {email, password} = req.body;
    // if email not matched, return from here with some status
    const existingUser = await prisma.user.findUnique({where: {email}});
    if(!existingUser){
        return res.status(401).json({message: "User does not exist !"})
    }
    const hashPassword = existingUser.password;
    const isMatch = await bcrypt.compare(password, hashPassword);
    if(isMatch){
        res.status(200).send({meassge: "Login successfully !"})
    }else{
        res.status(401).send({message: "can not login "})
    }
}