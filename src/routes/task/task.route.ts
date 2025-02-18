import express from 'express';
import TaskController from "../../http/admin/controllers/task.controller";

const router = express.Router();

router.post('/create', TaskController.create);
router.get('/', TaskController.index);


export default router;