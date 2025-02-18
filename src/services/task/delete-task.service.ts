import { EStatus, Task } from "@prisma/client";
import { FetchTaskService } from "./fetch-task.service";
import { UpdateTaskService } from "./update-task.service";

export class DeleteTaskService {
     private fetchTaskService;
     private updateTaskService;

     constructor() {
          this.fetchTaskService = new FetchTaskService();
          this.updateTaskService = new UpdateTaskService();
     };


     async delete(uuid: string): Promise<Task | null> {
          const task = await this.fetchTaskService.getByUuid(uuid);

          const dataToDeleted = {
               deleted_at: new Date(),
               status: EStatus.DELETED,
          };

          const taskDeleted = await this.updateTaskService.update(task, dataToDeleted);

          return taskDeleted;
     };
}