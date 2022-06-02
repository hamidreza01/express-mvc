import { Request, Response, NextFunction } from "express";

class Ctrl {
  public mainPage(req: Request, res: Response, next: NextFunction) {
    try {
      /* test error handler 
      res.end(1) */
      res.render("index.ejs", { ip: req.ip });
    } catch (err) {
      next(err);
    }
  }
}

export default new Ctrl();
