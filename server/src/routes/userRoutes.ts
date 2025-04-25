import express from 'express'
import { getUserDetails , getMoodGraph} from '../controllers/userController';
import {verifyToken} from '../middlewares/verifyToken'
const router = express.Router();
router.get("/details", verifyToken, getUserDetails)
router.get("/graph", verifyToken, getMoodGraph)
module.exports = router;