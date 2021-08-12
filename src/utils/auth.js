const TOKEN = "token";
//参考导航守卫
export const isLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};
//设置token
export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};
//获取token
export const getToken = () => {
  return localStorage.getItem("token") || "";
};
//移除token
export const removeToken = () => {
  localStorage.removeItem("token");
};
