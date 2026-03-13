import { Request, Response } from "express";
import { HealthService } from "../services/healthService";

const healthService = new HealthService();

export const getHealth = (_req: Request, res: Response): void => {
  const data = healthService.getHealth();
  res.status(200).json(data);
};
