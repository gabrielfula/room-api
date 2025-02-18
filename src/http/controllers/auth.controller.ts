import { randomUUID } from "crypto";
import { Response, Request } from "express";

export class AuthController {

     public async login(req: Request, res: Response) {
          res.json({
               "token": randomUUID(),
          });
     };

     public async register(req: Request, res: Response) {
          res.json({
               "token": randomUUID(),
          });
     };
};