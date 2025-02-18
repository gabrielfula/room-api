import { User } from "@prisma/client";
import { UserRepository } from "../../repositories/user.repository";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../../helpers/error";

export class AuthService {
     private userRepository;

     constructor() {
          this.userRepository = new UserRepository();
     }

     public async login(data: { username: string; password: string }): Promise<any> {
          const user = await this.userRepository.findByUsername(data.username);
          
          if (!user) {
               throw new Error("Credenciais inválidas");
               //prefiro retornar o mesmo erro de credenciais inválidas
               //para o usuario nao mandar varias reqs com diversos usernames
          };

          const isValidPassword = await this.validateUser(data.password, user.password);

          if (!isValidPassword) {
               throw new BadRequestError("Credenciais inválidas");
          };

          const token = jwt.sign({ user: user.username }, "secret-key", { expiresIn: "3h" });

          return {
               access_token: token
          };
     };

     async validateUser(plainPassword: string, hashedPassword: string): Promise<boolean> {
          return await bcrypt.compare(plainPassword, hashedPassword);
     };

     async register(data: { email: string; password: string }): Promise<User | null> {

          const userAlreadyExist = await this.userRepository.findByUsername(data.email);

          if (userAlreadyExist) {
               throw new BadRequestError("Usuário já esta cadastrado");
          };

          const hashedPassword = await bcrypt.hash(data.password, 10);

          const userData = {
               username: data.email,
               password: hashedPassword,
          };

          const user = await this.userRepository.create(userData);

          return user;
     }
}
