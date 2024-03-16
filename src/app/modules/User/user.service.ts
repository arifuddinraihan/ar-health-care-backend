import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const createAdminIntoDB = async (data: any) => {
  const hashedPassword: string = await bcrypt.hash(data.password, 12);

  const userData = {
    email: data.admin.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.user.create({
      data: userData,
    });

    const createAdminData = await transactionClient.admin.create({
      data: data.admin,
    });

    return createAdminData;
  });

  return result;
};

const getAllUsersFromDB = async () => {
  const result = await prisma.user.findMany();
  return result;
};

export const UserServices = {
  createAdminIntoDB,
  getAllUsersFromDB,
};
