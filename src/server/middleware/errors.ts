import type { Request, Response } from "express";

export const endPointUnknown = (req: Request, res: Response) => {
  res.status(404).json({ message: "Endpoint not found" });
};
