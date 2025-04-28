import express from 'express'
import cors from 'cors'

const app = express();

// middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Server/API is running...`
    })
})

export default app