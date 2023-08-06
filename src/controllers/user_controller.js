import { UserService } from "../services/mod.js";

async function getAllUsers({ _request, response }) {
  response.body = await UserService.retrieveAllUsers();
}

export { getAllUsers };