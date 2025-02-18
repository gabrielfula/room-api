import express from 'express';
import { TaskController } from '../../http/controllers/task.controller';

const router = express.Router();

const taskController = new TaskController();

router.post('/create', taskController.create);
router.get('/details/:uuid', taskController.detail);
router.get('/', taskController.index);
router.delete('/:uuid', taskController.cancel);


export default router;