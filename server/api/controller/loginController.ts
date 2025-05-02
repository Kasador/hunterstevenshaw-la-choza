import { Request, Response } from 'express';
import Users from '../models/Users';
import jwt  from 'jsonwebtoken'

// https://www.npmjs.com/package/jsonwebtoken
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    try {
        const user = await Users.findOne({ username }); // has to match whats already in the database. 

        if (!user || !user.validatePassword(password)) {
            res.status(401).json({ // 401 unauthorized! NOPE!
                success: false,
                message: 'Invalid username or password',
            });
            return;
        }

        const data = jwt
        console.log(data)

        res.status(200).json({ // good to go, return the data
            success: true,
            user: {
                _id: user._id,
                username: user.username,
                role: user.role,
            },
            message: 'Login successful!',
            data
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
