import { Router } from "https://deno.land/x/oak/mod.ts";
import { UserController } from "../controllers/mod.js";

// create new user router to handle all user routes
const userRouter = new Router();

// register user routes
userRouter
  .get("/", UserController.getAllUsers);

export { userRouter };