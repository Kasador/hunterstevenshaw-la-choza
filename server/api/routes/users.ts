// const router = require('express').Router();
import { Router } from 'express';
import { getAllUsers } from '../controller/usersController'
const router = Router();

router.get('/', getAllUsers)

export default router;