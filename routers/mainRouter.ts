import { Router } from "express";
import mainPageController from "../controllers/mainPageController";
const app = Router();
app.get("/", mainPageController.mainPage);
export default app;
