import { injectable } from "inversify";

@injectable()
export default class UserModel {
  getUser(): string {
    return "John Doe";
  }
}
