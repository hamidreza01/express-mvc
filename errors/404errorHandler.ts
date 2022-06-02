import { Request, Response, NextFunction } from "express";
export default (req: Request, res: Response, next: NextFunction) => {
  try {
    let err = new Error("Not Found");
    //@ts-ignore
    err.code = 404;
    err.stack = req.url;
    throw err;
  } catch (err) {
    next(err);
  }
};
