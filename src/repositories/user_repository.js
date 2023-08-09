import { databaseClient } from "../configs/database_config.js";
import { QueryResultUtil } from "../utils/mod.js";

// query strings
const ADD_USER_QUERY = `INSERT INTO "user" (id, username, first_name, last_name, created) VALUES ($userId, $username, $firstName, $lastName, NOW()) RETURNING *`
const RETRIEVE_USER_BY_USERNAME_QUERY = `SELECT * FROM "user" AS u WHERE u.username = $username`;
const RETRIEVE_ALL_USERS_QUERY = `SELECT * FROM "user"`;

async function createUser(username, firstName, lastName) {
  let queryResult;

  try {
    // generate random user id
    const userId = crypto.randomUUID();
    const result = await databaseClient.queryObject(ADD_USER_QUERY, { userId, username, firstName, lastName });
    queryResult = QueryResultUtil.buildSuccessQueryResult(result.rows);
  } catch (error) {
    queryResult = QueryResultUtil.buildErrorQueryResult(error);
  }

  return queryResult
}

async function retrieveUserByUsername(username) {
  let queryResult;

  try {
    const result = await databaseClient.queryObject(RETRIEVE_USER_BY_USERNAME_QUERY, { username })
    queryResult = QueryResultUtil.buildSuccessQueryResult(result.rows);
  } catch (error) {
    queryResult = QueryResultUtil.buildErrorQueryResult(error);
  }

  return queryResult;
}

async function retrieveAllUsers() {
  let queryResult;

  try {
    const result = await databaseClient.queryObject(RETRIEVE_ALL_USERS_QUERY);
    queryResult = QueryResultUtil.buildSuccessQueryResult(result.rows);
  } catch (error) {
    queryResult = QueryResultUtil.buildErrorQueryResult(error);
  }

  return queryResult;
}

export { 
  createUser, 
  retrieveUserByUsername,
  retrieveAllUsers 
};