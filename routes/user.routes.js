import { Router } from "express";

import {
  createUser,
  getAllUsers,
  createExercise,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.post("/:_id/exercises", createExercise)

export default router;
