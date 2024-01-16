import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import mainPage from "../views/mainPage.vue";
import errorPage from "../views/errorPage.vue";
import starPage from "../views/ItemPages/starsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: mainPage,
  },
  {
    path: "/stars",
    name: "star",
    component: starPage,
  },
  {
    path: "/:catchAll(.*)",
    component: errorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
