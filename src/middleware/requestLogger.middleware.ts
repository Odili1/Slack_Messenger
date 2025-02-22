import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";

export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.info("Request Object Details", {
    method: `[${req.method}]`,
    Body: req.body,
  });
  next();
};
