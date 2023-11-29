import { create } from "zustand";
import { IUser } from "../interfaces/IUser";

interface UserState {
  user: IUser;
  setUser: (user: IUser) => void;
}
const initialState = {
  username: "",
  email: "",
  autorized: false,
  id: "",
  role: "client",
  password: "",
  firstName: "",
  lastName: "",
  socketId: "",
};
export const UserStore = create<UserState>((set) => ({
  user: initialState,
  setUser: (user: IUser) => {
    set(() => ({
      user,
    }));
  },
}));
