import * as express from "express";
import { authentification } from "../../middleware/authentification";
import { UserController } from "../user/user.controllers";
import { authorization } from "../../middleware/authorization";
import { AuthController } from "../auth/auth.controller";
import { BookController } from "./book.controller";
const Router = express.Router();

Router.get(
  "/books",
//   authentification,
//   authorization(["admin"]),
  BookController.getAllBook
);
export { Router as bookRouter };
