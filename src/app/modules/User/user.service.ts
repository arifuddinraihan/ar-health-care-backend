import { Request, Response } from "express";

const CreateAdminIntoDB = async () => {
  return {
    message: "Admin Created!",
  };
};

export const UserServices = {
  CreateAdminIntoDB,
};
