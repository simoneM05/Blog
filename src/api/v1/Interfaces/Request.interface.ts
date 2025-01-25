import { Request, Response } from "express";

export type CustomRequest = (
  req: Request,
  res: Response
) => void | Promise<void>;
