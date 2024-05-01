import { post } from "./request";
import type { AxiosResponse } from "axios";

export interface LoginData {
  email:      string;
  password:   string;
}
export interface MyResponse extends AxiosResponse{
  status_code:  number;
  code:         number;
}

export function postLogin(data: LoginData){
  return post('/auth/login', data)
}