import Users from '../models/Users'
import { Request, Response } from 'express';

// https://stackoverflow.com/questions/27676884/explicitly-specifying-types-for-express-application-request-response
// https://stackoverflow.com/questions/59664670/typescript-async-function-return-type-void-vs-promisevoid
export const getAllUsers = async (req: Request, res: Response): Promise<void> => { // /api/users endpoint
    try {
        const data = await Users.find({}) // pull back all data from schema 

        if (!data) { // check does not currently work. Still returns status of 200 even if the database has no data.
            res.status(404).json({ // 404 not found
                success: false,
                message: 'Not users found.'
            })

            return;
        }

        res.status(200).json({ // 200 success
            success: true,
            data,
            message: `Request made from: ${req.method} - /api/users endpoint`
        })
    } catch (error) {
        console.log('Oh no! Something went wrong. ', error)
        res.status(500).json(error) // 500 internal server error
    }
}