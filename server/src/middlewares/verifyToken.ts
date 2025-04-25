import {Request, Response, NextFunction} from 'express';
import jwt from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next: NextFunction)=>{
    const token = req.header("Authorization")?.replace("Bearer", "");

    if(!token){
        return res.status(400).json({message: "Denied access due to unavailable of token."})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_secret_key);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({message: err})
    }
}