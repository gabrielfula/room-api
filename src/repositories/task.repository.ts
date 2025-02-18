import { Task } from "@prisma/client";
import prisma from "../configs/prisma";

export class TaskRepository {
     private prisma;

     constructor() {
          this.prisma = prisma;
     };

     async list(): Promise<Task[]> {
          return await this.prisma.task.findMany();
     };

     async create(data: any): Promise<Task | any> {
          return await this.prisma.task.create({
               data,
          });
     };

     async findByUuid(uuid: string): Promise<Task | null> {
          return await this.prisma.task.findFirst({
              where: { uuid },
          });
      }
      
}