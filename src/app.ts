import express, { Application, Request, Response } from "express";
import { UserRoutes } from "./app/modules/User/user.routes";
import cors from "cors";

const app: Application = express();

// CORS
app.use(cors());

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server routes
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: `Ar Health Care App is running..!`,
  });
});

// App routes
app.use("/api/v1/user", UserRoutes);

export default app;
