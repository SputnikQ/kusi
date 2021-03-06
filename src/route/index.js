import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      component: () => import("@/view/home/index"),
      meta: {
        footShow: true,
      },
      children: [
        {
          path: "znsb",
          component: () => import("@/view/home/znsb"),
          meta: {
            footShow: true,
          },
        },
        {
          path: "ej",
          component: () => import("@/view/home/ej"),
          meta: {
            footShow: true,
          },
        },
        {
          path: "kh",
          component: () => import("@/view/home/kh"),
          meta: {
            footShow: true,
          },
        },
        {
          path: "ds",
          component: () => import("@/view/home/ds"),
          meta: {
            footShow: true,
          },
        },
        {
          path: "dj",
          component: () => import("@/view/home/dj"),
          meta: {
            footShow: true,
          },
        },
      ],
    },
    {
      path: "/login",
      component: () => import("@/view/log/index"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/detail/:id",
      component: () => import("@/view/detail/index"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/mine",
      component: () => import("@/view/mine/index"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/classify",
      component: () => import("@/view/classify/index"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/shopcart",
      component: () => import("@/view/shopcart/index"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/register",
      component: () => import("@/view/register/index"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/setup",
      component: () => import("@/view/mine/setup"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/personinform",
      component: () => import("@/view/mine/personinform"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/address",
      component: () => import("@/view/mine/address"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/order",
      component: () => import("@/view/order/index"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/orderlist",
      component: () => import("@/view/order/orderlist"),
      meta: {
        footShow: false,
      },
    },
  ],
});
export default router;
