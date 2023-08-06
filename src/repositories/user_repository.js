import { databaseClient } from "../configs/database_config.js";

// query strings
const RETRIEVE_ALL_USERS_QUERY = `SELECT * FROM "user"`;

async function retrieveAllUsers() {
  try {
    const result = await databaseClient.queryArray(RETRIEVE_ALL_USERS_QUERY);
    return result.rows;
  } catch (error) {
    console.error(error.message);
  }
}

export { retrieveAllUsers };