import { Request, Response } from "express";
import { FetchTaskService } from "../../services/task/fetch-task.service";
import { CreateTaskService } from "../../services/task/create-task.service";
import { DeleteTaskService } from "../../services/task/delete-task.service";
import { UpdateTaskService } from "../../services/task/update-task.service";
import { TaskListResponse } from "../responses/task/task.response";
import { TaskDetailResponse } from "../responses/task/task-detail.response";

export class TaskController {
     private fetchTaskService;
     private createTaskService;
     private deleteTaskService;
     private updateTaskService;

     constructor() {
          this.fetchTaskService = new FetchTaskService();
          this.createTaskService = new CreateTaskService();
          this.deleteTaskService = new DeleteTaskService();
          this.updateTaskService = new UpdateTaskService();
     }

     public index = async (req: Request, res: Response) => {

          const tasks = await this.fetchTaskService.index();

          res
          .status(200)
          .json({
               data: TaskListResponse.serialize(tasks)
          });
     };

     public create = async (req: Request, res: Response) => {

          const task = await this.createTaskService.index(req.body);

          res
          .status(200)
          .json({
               "message": "Criado com sucesso!" ,
               data: TaskDetailResponse.serialize(task)
          });
     };

     public detail = async (req: Request, res: Response) => {

          const task = await this.fetchTaskService.getByUuid(req.params.uuid);

          res
          .status(200)
          .json({
               data: TaskDetailResponse.serialize(task)
          });
     };

     public cancel = async (req: Request, res: Response) => {

          const task = await this.deleteTaskService.delete(req.params.uuid);

          res
          .status(200)
          .json({ 
               "message": "Deletado com sucesso!",
               data: TaskDetailResponse.serialize(task),
          });
     };

     public edit = async (req: Request, res: Response) => {

          const task = await this.updateTaskService.edit(req.params.uuid, req.body);

          res
          .status(200)
          .json({ 
               "message": "Atualizado com sucesso!",
               data: TaskDetailResponse.serialize(task),
          });
     };
}
