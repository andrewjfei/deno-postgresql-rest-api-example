import { Client } from "https://deno.land/x/postgres/mod.ts";

// create a new postgresql client with config
const databaseClient = new Client({
  user: "andrewjfei",
  database: "rest-api-example",
  hostname: "localhost",
  password: "password", // todo: store value in .env file
  port: 5432,
});

export { databaseClient };