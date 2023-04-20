import { Service } from "typedi";
import UserModel from "./user-model";

@Service()
export default class UserService {
  constructor(public userModel: UserModel) {}

  getUser = () => {
    return this.userModel.getUser();
  };
}
