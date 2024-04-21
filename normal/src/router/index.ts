import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import errorPage from "../views/errorPage.vue";
import mainPage from "../views/mainPage.vue";

import starPage from "../views/ItemPages/starsPage.vue";
import AIPage from "../views/ItemPages/AIPage.vue";
import themeParkPage from "../views/ItemPages/themeParkPage.vue";

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
    path: "/AI",
    name: "AI",
    component: AIPage,
  },
  {
    path: "/themePark",
    name: "themePark",
    component: themeParkPage,
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
