import axios from "axios";
import { getToken } from "./auth";
const instance = axios.create({
  baseURL: "http://localhost:3009",
  timeout: 5000,
});
//全局请求拦截
instance.interceptors.request.use(
  function(config) {
    //如果有token ，直接放到请求头里
    if (getToken()) {
      config.headers.authorization = "Bearer " + getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
//相应拦截
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const del = (url, params) => instance.delete(url, { params });
export const put = (url, params) => instance.put(url, params);
export default instance;
