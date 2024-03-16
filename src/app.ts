import express, { Application, Request, Response } from "express";
import { UserRoutes } from "./app/modules/User/user";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: `Ar Health Care App is running..!`,
  });
});

app.use("/api/v1/user", UserRoutes);

export default app;
