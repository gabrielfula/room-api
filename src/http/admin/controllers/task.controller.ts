import { Response, Request } from "express";

export async function index(req: Request, res: Response) {
     res.json({
          "message": "Listagem"
     });
};

export async function create(req: Request, res: Response) {
     res.json({
          "message": "Criado com sucesso!",
     });
};

export async function cancel(req: Request, res: Response) {
     res.json({
          "message": "Deletado com sucesso!",
     });
};

export async function edit(req: Request, res: Response) {
     res.json({
          "message": "Atualizado com sucesso!",
     });
};



export default {
     index,
     create,
     cancel,
     edit,
}