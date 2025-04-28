import express from 'express'
const router = express.Router()
import UsersRoute from './users' 

router.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        message: 'From /api endpoint.'
    })
})

router.use('/users', UsersRoute)

export default router