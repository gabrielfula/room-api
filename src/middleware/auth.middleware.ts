import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from "../helpers/error";


const publicRoutes = [
  '/v1/auth/signin',
  '/v1/auth/register',
]; 


export const authMiddleware = (req: Request, res: Response, next: NextFunction) : void | Response => {

     if (publicRoutes.includes(req.path)) {
          return next(); 
     };

     const authHeader = req.headers['authorization'];
     const token = authHeader && authHeader.split(' ')[1];

     if (token == null) throw new UnauthorizedError("Usuário não autorizado");

     jwt.verify(token, 'secret-key', (err, user) => {
          if (err) throw new UnauthorizedError("Usuário não autorizado");
          next();
     });
}