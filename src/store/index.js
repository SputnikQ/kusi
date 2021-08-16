import Vue from "vue"; //引入vue文件
import Vuex from "vuex"; //引入vuex
import { proDetailApi } from "../api/product";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    data: "手机",
    number: 1,
    addressid: "",
    defaultAddress: "",
    orderCart: [],
    total: "",
  },
  getters: {},
  mutations: {
    async godetail(state, id) {
      state.data = id;
      const res = await proDetailApi(id);
      console.log(res);
      return res;
    },
  },
  actions: {
    goDetail(context, payload) {
      context.commit("godetail", payload);
    },
    // goDetail(context, payload) {
    //   context.commit("godetail", payload);
    // },
  },
});
export default store;
