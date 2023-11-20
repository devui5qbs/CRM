import axios from "axios";
import { API } from "../constants/API";

const logout = async (email: string) => {
  const body = {
    email,
  };

  return axios.put(`${API.URL}${API.LOGOUT}`, body);
};


export const LogOutService = {
    logout,
};
