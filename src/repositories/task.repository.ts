import { Task } from "@prisma/client";
import prisma from "../configs/prisma";

export class TaskRepository {
     private prisma;

     constructor() {
          this.prisma = prisma;
     };

     async list(): Promise<Task[]> {
          return await this.prisma.task.findMany();
     }
}