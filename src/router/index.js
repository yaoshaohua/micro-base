import Vue from "vue";
import VueRouter from "vue-router";
import BasicLayout from "../layouts/BasicLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "BasicLayout",
    component: BasicLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/micro-vue/*",
        name: "MicroVue",
        component: () =>
          import(/* webpackChunkName: "microVue" */ "../views/MicroVue.vue"),
      },
      {
        path: "/micro-vue3/*",
        name: "MicroVueThree",
        component: () =>
          import(/* webpackChunkName: "MicroVueThree" */ "../views/MicroVueThree.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../layouts/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
