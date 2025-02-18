import { Response, Request } from "express";
import { AuthService } from "../../services/auth/auth.service";
import { AuthResponse } from "../responses/auth/auth.response";

export class AuthController {

     private authService;

     constructor() {
          this.authService = new AuthService();	
     }

     public login = async (req: Request, res: Response) => {
          try {
               const user = await this.authService.login(req.body);

               res
               .status(200)
               .json({
                    "token": user.access_token,
               });

          } catch (error: any) {
               res.status(400).json({ message: error.message });
          }
     };

     public register = async (req: Request, res: Response) => {

          const user = await this.authService.register(req.body);

          res
          .status(200)
          .json({
               "message": "Usuário criado com sucesso!" ,
               data: AuthResponse.serialize(user)
          });
     };
};