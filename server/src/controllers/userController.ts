import {Request, Response} from 'express';
import prisma from "../config/db";

export const getDetails = async (req: Request, res: Response)=>{
    const {userId} = req.body;

    const user = await prisma.user.findUnique({where : {userId}});

    return res.status(200).json({message: "User Details", user})
}

export const getGraph = async (req: Request, res: Response)=>{
    const userId = req.body;
    const journals = await prisma.journal.findMany({where: {userId}});
    return res.status(200).json({message: "Graph details", journals})
}