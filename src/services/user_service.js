import UserDao from "../daos/user_dao.js";
import { UserRepository } from "../repositories/mod.js";
import { ResponseUtil } from "../utils/mod.js";
import { status } from "../enums/mod.js";

async function createNewUser({ username, firstName, lastName }) {
  // validate username
  await validateUser(username);
  
  const queryResult = await UserRepository.createUser(username, firstName, lastName);

  let response;

  if (queryResult.status === status.Success) {
    const rows = queryResult.rows;

    // validate result set rows
    if (rows !== 1) {
      // throw error
    }

    // convert user table row to user dao
    response = toUserDao(rows[0]);
  } else {
    // check what the error is then return correct response code
    response = ResponseUtil.buildErrorResponse(400, queryResult.error.message);
  }
  
  return response;
}

async function retrieveAllUsers() {
  const queryResult = await UserRepository.retrieveAllUsers();

  let response;

  if (queryResult.status === status.Success) {
    const rows = queryResult.rows;

    // map every user table row to a user dao
    const userDaoArray = rows.map((element) => {
      return toUserDao(element);
    });

    return ResponseUtil.formatArrayData(userDaoArray);
  } else {
    response = ResponseUtil.buildErrorResponse(400, queryResult.error.message);
  }

  return response;
}

async function validateUser(username) {
  const queryResult = await UserRepository.retrieveUserByUsername(username);

  if (queryResult.status === status.Success) {
    const rows = queryResult.rows;

    // if one or more row returns than it means that username is already used 
    if (rows >= 1) {
      console.error(`Username ${username} already exists`);
      // return error
    }
  }
}

function toUserDao(userRow) {
  return new UserDao(
    userRow['id'],
    userRow['username'],
    userRow['first_name'],
    userRow['last_name'],
    userRow['created'],
  )
}

export { createNewUser, retrieveAllUsers };