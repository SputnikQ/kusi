import { get } from "../utils/request";
//获取商品列表
export const proListApi = (params) => get("/api/v1/products", params);
//获取商品详情
export const proDetailApi = (params) => get("/api/v1/products/" + params);
//获取的商品的分类
export const categoriesApi = (params) => get("/api/v1/products/", params);
