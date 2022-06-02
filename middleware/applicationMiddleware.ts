import express, { Application } from "express";
import securityMiddleware from "./securityMiddleware";
import mainRouters from '../routers/mainRouter'
export default (app: Application) => {
  app.use("/public", express.static("./public"));
  app.use(securityMiddleware);
  app.use('/',mainRouters)
};
