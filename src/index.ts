import { AppDataSource } from "./data-source";
import * as express from "express";
import * as dotenv from "dotenv";
const createError  = require('http-errors');
import { Request, Response } from "express";
import { userRouter } from "./routes/user.routes";
import "reflect-metadata";
import { errorHandler } from "./middleware/errorHandler";
import { bookRouter } from "./routes/book.routes";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { PORT = 3000 } = process.env;

app.use("/auth", userRouter);
app.use("/api", bookRouter);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});



AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
