import axios from "axios";
import { API } from "../constants/API";

const auth = async (email: string, password: string) => {
  const body = {
    email,
    password,
  };

  return axios.post(`${API.URL}${API.AUTH}`, body);
};

const register = async (
  email: string,
  password: string,
  username: string,
  firstName: string,
  lastName: string,
) => {
  const body = {
    email,
    password,
    username,
    firstName,
    lastName,
  };

  return axios.post(`${API.URL}${API.REGISTER}`, body);
};
export const AuthService = {
  auth,
  register,
};
