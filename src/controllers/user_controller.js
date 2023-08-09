import { UserService } from "../services/mod.js";
import { status } from "../enums/mod.js";

async function addNewUser({ request, response }) {
  const payload = await request.body().value;
  const res = await UserService.createNewUser(payload);

  response.body = res;
  response.status = res.status === status.Success ? 201 : res.code;
}

async function getAllUsers({ _request, response }) {
  const res = await UserService.retrieveAllUsers();

  response.body = res;
  response.status = res.status === status.Success ? 200 : res.code;
}

export { addNewUser, getAllUsers };