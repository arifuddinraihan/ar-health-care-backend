import express from "express";

const router = express.Router();

router.post("/", UserController.createAdmin);
router.get("/", UserController.getAllUsers);

export const AuthRoutes = router;
