import { Request, Response, NextFunction } from "express";
export default (err: Error, req: Request, res: Response,next : NextFunction) => {
  //@ts-ignore
  err.code ||= 500;
  if (process.env.DEBUG == "true") {
    //@ts-ignore
    res
      //@ts-ignore
      .send(
        //@ts-ignore
        `<html><body><h1>${err.code}</h1><h2>${err.message}</h2><h3>${err?.stack}</h3></body></html>`
      );
  } else {
    //@ts-ignore)
    if (isNaN(err.code)) {
      //@ts-ignore
      err.code = 500;
      err.message = "server internal error";
    }
    res
      //@ts-ignore
      .status(err.code)
      .send(
        //@ts-ignore
        `<html><body><h1>${err.code}</h1><h2>${err.message}</h2></body></html>`
      );
  }
};
