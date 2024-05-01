import axios from 'axios'
import type { AxiosRequestConfig} from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000
})

api.interceptors.request.use((cfg)=>{
  const token = localStorage.getItem('access_token');
  if(token){
    cfg.headers.Authorization = `Bearer ${token}`;
  }
  return cfg;
})

api.interceptors.response.use((value)=>{
  return value.data
})

const get = (p: string, cfg = {}) => api.get(p, cfg);
const del = (p: string, cfg = {}) => api.delete(p, cfg);
const post = (p: string, data = {}, cfg = {}) => api.post(p, data, cfg);
const put = (p: string, data = {}, cfg = {}) => api.put(p, data, cfg);

export { get, post, del, put };