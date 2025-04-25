import express,{Request, Response, NextFunction} from 'express';
const router = express.Router();
import {signup, login} from '../controllers/authController'


router.get("/", (req:Request, res:Response, next:NextFunction)=>{
    res.send("I am from router !");
})

router.post("/login", login)
router.post("/signup", signup)


module.exports = router;