import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import httpStatus from "http-status";

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
app.use("/api/v1", router);

// Global Error Handler
app.use(globalErrorHandler);

// NOT Found API route response
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND",
    error: {
      path: req.path,
      errorMessage: "Your requested path never exits!",
    },
  });
});

export default app;
