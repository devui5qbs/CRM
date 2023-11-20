import { IUser } from "../interfaces/IUser";
import { AuthService } from "../services/auth-services";

export const SignInCtrl = async (email: string, password: string) => {
  try {
    const data = await AuthService.auth(email, password);
    const resonse: IUser = data.data;
    return resonse;
  } catch (error: any) {
    const e: string = error.response.data.message;
    return e;
  }
};
export const SignUpCtrl = async (
  email: string,
  password: string,
  username: string,
  firstName: string,
  lastName: string
) => {
  try {
    console.log({
      email,
      password,
      username,
      firstName,
      lastName,
    });

    const data = await AuthService.register(
      email,
      password,
      username,
      firstName,
      lastName
    );
    const resonse: IUser = data.data;
    return resonse;
  } catch (error: any) {
    const e: string = error.response.data.message;
    return e;
  }
};
