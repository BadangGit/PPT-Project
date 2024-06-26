import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import errorPage from "../views/errorPage.vue";
import mainPage from "../views/newMainPage.vue";

import oldMainPage from "../views/ItemPages/oldMainPage.vue";
import starPage from "../views/ItemPages/starsPage.vue";
import AIPage from "../views/ItemPages/AIPage.vue";
import themeParkPage from "../views/ItemPages/themeParkPage.vue";
import stainedGlassPage from "../views/ItemPages/stainedGlassPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: mainPage,
  },
  {
    path: "/old-page",
    name: "old-page",
    component: oldMainPage,
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
    path: "/theme-park",
    name: "theme-park",
    component: themeParkPage,
  },
  {
    path: "/stained-glass",
    name: "stained-glass",
    component: stainedGlassPage,
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
