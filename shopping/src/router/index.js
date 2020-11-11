import { createRouter, createWebHashHistory } from "vue-router";
// 导入登录页面组件
import Login from "../views/Login.vue";
// 声明路由规则
const routes = [
  // 重定向
  {
    path: "/",
    redirect: "/login"
  },
  //  登录页面
  {
    path: "/login",
    component: Login
  }

  // {
  //   path: "/about",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
