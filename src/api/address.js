import { post, get, put, del } from "../utils/request";
//新增收货地址
export const addAddressApi = (params) => post("/api/v1/addresses", params);
//获取收货地址列表
export const getAddressApi = () => get("/api/v1/addresses");
//修改收货地址
export const editAddressApi = (id, params) => put("/api/v1/addresses/" + id, params);
//删除收货地址
export const deletaAddressApi = (id) => del("/api/v1/addresses/" + id);
//获取单条收货地址
export const addressApi = (id) => get("/api/v1/addresses/" + id);
