import { Request, Response, NextFunction } from "express";
import fs from "fs";

const DATA = "./server/dist/data.json";

export const index = (req: Request, res: Response, next: NextFunction) => {
  try {
    const src = fs.createReadStream(DATA, { encoding: "utf-8" });
    const headers = { "Content-Type": "application/json" };
    res.writeHead(200, headers);
    src.pipe(res);
  } catch (err) {
    next(err);
  }
};
