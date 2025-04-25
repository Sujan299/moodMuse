import express, {Request, Response, NextFunction} from 'express'
import { getInputSection , postJournal} from '../controllers/journalController';
import {verifyToken} from '../middlewares/verifyToken'
const router = express.Router();

router.get("/", verifyToken, getInputSection)

router.post("/", verifyToken, postJournal)


module.exports = router;