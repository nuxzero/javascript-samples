import { Service } from "typedi";

@Service()
export default class UserModel {
  getUser(): string {
    return "John Doe";
  }
}
