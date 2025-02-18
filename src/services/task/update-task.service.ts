import { Task } from "@prisma/client";
import { TaskRepository } from "../../repositories/task.repository";

export class UpdateTaskService {
     private taskRepository;

     constructor() {
          this.taskRepository = new TaskRepository();
     };


     async update(task: Task, data: any): Promise<Task | null> {

          const tasks = await this.taskRepository.update(task, data);

          return tasks;
     };
}