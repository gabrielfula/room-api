import { Request, Response } from "express";
import { FetchTaskService } from "../../services/task/fetch-task.service";
import { TaskListResponse } from "../responses/task.response";

export class TaskController {
     private fetchTaskService;

     constructor() {
          this.fetchTaskService = new FetchTaskService();
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
          res.json({ "message": "Criado com sucesso!" });
     };

     public cancel = async (req: Request, res: Response) => {
          res.json({ "message": "Deletado com sucesso!" });
     };

     public edit = async (req: Request, res: Response) => {
          res.json({ "message": "Atualizado com sucesso!" });
     };
}
