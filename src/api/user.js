import { post } from "../utils/request";
import { get } from "../utils/request";
//二次封装注册接口请求
export const regApi = (user) => post("/api/v1/auth/reg", user);
//封装登录接口
export const logApi = (user) => post("/api/v1/auth/login", user);
//获取用户信息
export const userApi = () => get("/api/v1/users/info");
