import { NextFunction, Request, Response } from "express";
import { FetchTaskService } from "../../services/task/fetch-task.service";
import { TaskListResponse } from "../responses/task.response";
import { CreateTaskService } from "../../services/task/create-task.service";
import { TaskDetailResponse } from "../responses/task-detail.response";

export class TaskController {
     private fetchTaskService;
     private createTaskService;

     constructor() {
          this.fetchTaskService = new FetchTaskService();
          this.createTaskService = new CreateTaskService();
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
          .json({
               "message": "Criado com sucesso!" ,
               data: TaskDetailResponse.serialize(task)
          });
     };

     public detail = async (req: Request, res: Response) => {

          const task = await this.fetchTaskService.getByUuid(req.params.uuid);

          res
          .json({
               data: TaskDetailResponse.serialize(task)
          });
     };

     public cancel = async (req: Request, res: Response) => {
          res.json({ "message": "Deletado com sucesso!" });
     };

     public edit = async (req: Request, res: Response) => {
          res.json({ "message": "Atualizado com sucesso!" });
     };
}
