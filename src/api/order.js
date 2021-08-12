import { post } from "../utils/request";
//订单提交接口
export const order = (params) => post("/api/v1/orders", params);
