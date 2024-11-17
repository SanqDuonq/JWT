import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
export default function CheckToken (req:Request, res: Response,next: NextFunction) {
    if (req.url === '/users/login' || req.url === '/users/register') {
        return next();
    }
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            res.status(401).json({message: 'Authorization header is missing'})
        }
        
        const accessToken = authHeader?.split(" ")[1]
        if (!accessToken) {
            res.status(401).json({message: "Token is missing"})
        }

        const jwtSecret = process.env.JWT_SECRET
        if (!jwtSecret) {
            throw new Error("Jwt secret is not defined")
        }

        const jwtObject = jwt.verify(accessToken as string,jwtSecret) as JwtPayload

        const isExpired = Date.now() >= (jwtObject.exp as number) * 1000 
        if (isExpired) {
            res.status(401).json({message: 'Token is expired'})
        }
        return next();
    } catch (error) {   
        res.status(401).json({message: 'Invalid or expired token'})
    }
}