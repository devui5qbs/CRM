import { IUser } from "../interfaces/IUser";
import { UserService } from "../services/user-services";

export const UserCtrl = async (email: string) => {
  try {
    const data = await UserService.post(email);
    const response: IUser[] = data.data;
    return response;
  } catch (error: any) {
    const e: string = error.response.data.message;
    return e;
  }
};
