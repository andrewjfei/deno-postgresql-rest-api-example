import { Application } from "https://deno.land/x/oak/mod.ts";
import { databaseClient } from "./configs/mod.js";
import { router } from "./routes/mod.js";

// create new application
const app = new Application();

// attempt to connect to postgresql database
try {
  await databaseClient.connect();
} catch (_error) {
  // handle error here
}

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
