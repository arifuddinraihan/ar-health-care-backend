import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  const result = await UserServices.createAdminIntoDB(req.body);
  res.send(result);
};

const getAllUsers = async (req: Request, res: Response) => {
  const result = await UserServices.getAllUsersFromDB();
  res.send(result);
};

export const UserController = {
  createAdmin,
  getAllUsers,
};
