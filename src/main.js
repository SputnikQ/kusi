import Vue from "vue";
import App from "./App.vue";
import vant from "vant";
import "vant/lib/index.css";
import "./assets/css/reset.css";
import router from "./route";
import store from "./store";
import "./assets/icon/iconfont.css";
Vue.use(vant);
import { Lazyload } from "vant";
Vue.use(Lazyload);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
