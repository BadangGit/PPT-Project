import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import mainPage from "../views/mainPage.vue";
import simulationPage from "../views/simulationPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: mainPage,
  },
  {
    path: "/simulation",
    name: "simulation",
    component: simulationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
