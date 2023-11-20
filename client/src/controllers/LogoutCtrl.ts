import { LogOutService } from "../services/logout-service";

export const LogoutCtrl = async (email: string) => {
  try {
    const data = await LogOutService.logout(email);
    return data.data;
  } catch (error: any) {
    return error.response.data.message;
  }
};
