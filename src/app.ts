import express, { Application } from "express";
import healthRouter from "./routes/healthRoutes";

const app: Application = express();

app.use(express.json());
app.use("/api", healthRouter);

export default app;
