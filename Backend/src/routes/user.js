import express from 'express';
import { loginOrSignUp } from '../controllers/user.controller';

const router = express.Router();

//login/signup api created
router.post("/login-register", loginOrSignUp )

export default router;