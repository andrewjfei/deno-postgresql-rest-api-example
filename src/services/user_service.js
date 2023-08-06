import { UserRepository } from "../repositories/mod.js";
import { ResponseUtil } from "../utils/mod.js";

async function retrieveAllUsers() {
  const userArray = await UserRepository.retrieveAllUsers();
  return ResponseUtil.formatArrayData(userArray);
}

export { retrieveAllUsers };