import express from 'express';
import authRoute from "./login/auth.route";
import taskRoute from "./task/task.route";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/tasks", taskRoute);

export default router;