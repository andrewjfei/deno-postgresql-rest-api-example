import { Router } from "https://deno.land/x/oak/mod.ts";
import { userRouter } from "./user_router.js";

// create new router object
const router = new Router();

function helloWorld({ _request, response }) {
  response.body = "Hello World!";
}

// register routes
router.get("/hello-world", helloWorld);
router.use("/user", userRouter.routes());

export { router };