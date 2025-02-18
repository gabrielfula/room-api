import { Task } from "@prisma/client";
import { TaskRepository } from "../../repositories/task.repository";

export class CreateTaskService {
     private taskRepository;

     constructor() {
          this.taskRepository = new TaskRepository();
     };


     async index(data: any): Promise<Task> {

          const tasks = await this.taskRepository.create(data);

          return tasks;
     };
}