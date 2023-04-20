import { inject, injectable } from "inversify";
import UserModel from "./user-model.js";

@injectable()
export default class UserService {
  userModel: UserModel;

  constructor(@inject(UserModel) userModel: UserModel) {
    this.userModel = userModel;
  }

  getUser(): string {
    return this.userModel.getUser();
  }
}
