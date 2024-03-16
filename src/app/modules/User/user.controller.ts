import { Request, Response } from "express";
import { UserServices } from "./user.service";

const CreateAdmin = async (req: Request, res: Response) => {
  const result = await UserServices.CreateAdminIntoDB();
  res.send(result);
};

export const UserController = {
  CreateAdmin,
};
