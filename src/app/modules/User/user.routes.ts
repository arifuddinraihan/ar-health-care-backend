import express, { Request, Response } from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.createAdmin);
router.get("/", UserController.getAllUsers);

export const UserRoutes = router;
