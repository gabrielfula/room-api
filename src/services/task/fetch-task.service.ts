import { Task } from "@prisma/client";
import { TaskRepository } from "../../repositories/task.repository";

export class FetchTaskService {
     private taskRepository;

     constructor() {
          this.taskRepository = new TaskRepository();
     };


     async index(): Promise<Task[]> {
          const tasks = await this.taskRepository.list();

          return tasks;
     };

     async getByUuid(uuid: string): Promise<Task> {
          const tasks = await this.taskRepository.findByUuid(uuid);

          if (!tasks) {
               throw Error("Tarefa não foi encontrada");
          };

          return tasks;
     };
}