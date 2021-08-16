import { post, get } from "../utils/request";
//订单提交接口
export const order = (params) => post("/api/v1/orders", params);
//获取订单列表
export const orderlist = () => get("/api/v1/orders");
//获取订单详情
export const orderdetail = (id) => get("/api/v1/orders/" + id);
