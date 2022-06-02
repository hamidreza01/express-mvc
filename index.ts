import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import _404ErrorHandler from "./errors/404errorHandler";
import errorHandler from "./errors/errorHandler";
import applicationMiddleware from "./middleware/applicationMiddleware";

env.config({
  path: "./config/.env",
});

const app = express();

mongoose.connect(
  //@ts-ignore
  process.env.DATABASE_URL + process.env.DATABASE_NAME,
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("connected to database");
    }
  }
);

applicationMiddleware(app);

app.use(_404ErrorHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
