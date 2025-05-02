// const router = require('express').Router();
import { Router } from 'express';
import { loginUser } from '../controller/loginController'
const router = Router();

router.get('/', loginUser)

export default router;