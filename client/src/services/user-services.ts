import axios from "axios";
import { API } from "../constants/API";

const post = async (email: string) => {
  const body = {
    email,
  };

  return axios.post(`${API.URL}${API.USERS}`, body);
};
const role = async (email: string,role:string) => {
    const body = {
      email,
      role,
    };
  
    return axios.put(`${API.URL}${API.CHANGEROLE}`, body);
  };

export const UserService = {
    post,
    role,
};
