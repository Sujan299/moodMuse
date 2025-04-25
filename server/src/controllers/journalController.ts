import {Request, Response} from 'express'

export const getInputSection = (req: Request, res: Response)=>{
    return res.status(200).json({message: "You have access now !"})
}


interface postBody{
    entry: String,
    userId: String
}

export const postJournal = (req: Request<{},{},postBody>, res: Response)=>{
    const {entry, userId} = req.body;
    // generate ai suggestion with the help of ai
    // and add that suggestion to journals of that user with users id
}