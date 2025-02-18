import { EStatus, Task } from "@prisma/client";
import prisma from "../configs/prisma";

export class TaskRepository {
     private prisma;

     constructor() {
          this.prisma = prisma;
     };

     async list(status?: string): Promise<Task[]> {
          return await this.prisma.task.findMany({
              where: {
                  status: status ? status as EStatus : { not: EStatus.DELETED },
              },
          });
      }      

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

     async update(task: Task, data: any): Promise<Task | null> {
          return await this.prisma.task.update({
               where: task,
               data
          });
     }
}