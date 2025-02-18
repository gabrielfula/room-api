import { User } from "@prisma/client";
import prisma from "../configs/prisma";

export class UserRepository {
     private prisma;

     constructor() {
          this.prisma = prisma;
     };

     async findByUsername(username: string): Promise<User | null> {
          return await this.prisma.user.findUnique({
               where: {
                    username,
               }
          });
     };

     async create(data: any): Promise<User | null> {

          return await this.prisma.user.create({
               data,
          });
     };
}