import create from "zustand";
import { IUser } from "../interfaces/IUser";

interface UserState {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const UserStore = create<UserState>((set) => ({
  user: {
    username: "",
    email: "",
    autorized: false,
    id: "",
    role: "client",
    password: "",
    firstName: "",
    lastName: "",
  },
  setUser: (user: IUser) => {
    set(() => ({
      user,
    }));
  },
}));
