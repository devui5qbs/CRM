import { UserService } from "../services/user-services";

export const CahngeRoleCtrl = async (email: string, role: string) => {
  try {
    const data = await UserService.role(email, role);
    return data.data;
  } catch (error: any) {
    return error.response.data.message;
  }
};
