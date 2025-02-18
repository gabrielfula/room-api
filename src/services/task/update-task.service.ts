import { Task } from "@prisma/client";
import { TaskRepository } from "../../repositories/task.repository";
import { FetchTaskService } from "./fetch-task.service";

export class UpdateTaskService {
     private taskRepository;
     private fetchTaskService;

     constructor() {
          this.taskRepository = new TaskRepository();
          this.fetchTaskService = new FetchTaskService();
     };


     async update(task: Task, data: any): Promise<Task | null> {

          const tasks = await this.taskRepository.update(task, data);

          return tasks;
     };

     async edit(uuid: string, data: any): Promise<Task | null> {

          const task = await this.fetchTaskService.getByUuid(uuid);

          const taskUpdated = await this.taskRepository.update(task, data);

          return taskUpdated;
     };
}