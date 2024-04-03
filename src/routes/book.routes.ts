import * as express from "express";
import { authentification } from "../middleware/authentification";
import { UserController } from "../controllers/user.controllers";
import { authorization } from "../middleware/authorization";
import { AuthController } from "../controllers/auth.controller";
import { BookController } from "../controllers/book.controller";
const Router = express.Router();

Router.get(
  "/books",
//   authentification,
//   authorization(["admin"]),
  BookController.getAllBook
);
export { Router as bookRouter };
