import { Router } from "express";

import {
  createUser,
  getAllUsers,
  createExercise,
  getUserLogs,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.post("/:_id/exercises", createExercise);

router.post("/:_id/logs", getUserLogs);

export default router;
