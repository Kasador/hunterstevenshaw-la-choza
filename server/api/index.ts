import express from 'express'
import cors from 'cors'
import router from './routes/index'

const app = express();

// middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `API is running...`
    })
})

app.use('/api', router)

export default app