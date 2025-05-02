import express from 'express'
const router = express.Router()
import UsersRoute from './users' 
import ProductsRoute from './products' 

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'From /api endpoint.'
    })
})

router.use('/users', UsersRoute)
router.use('/products', ProductsRoute)

export default router