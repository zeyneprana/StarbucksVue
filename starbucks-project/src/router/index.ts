import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    name: "CampaignPage",
    path: "/campaigns",
    component: () => import("../pages/CampaignPage.vue"),
  },
  {
    name: "MenuPage",
    path: "/menu",
    component: () => import("../pages/MenuPage.vue"),
  },
  {
    name: "StarbucksRewardPage",
    path: "/starbucks-rewards",
    component: () => import("../pages/StarbucksRewardPage.vue"),
  },
  {
    name: "EGiftPage",
    path: "/e-gift",
    component: () => import("../pages/EGiftPage.vue"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("../pages/LoginPage.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("../pages/RegisterPage.vue"),
  },
  {
    name: "BasketPage",
    path: "/basket",
    component: () => import("../pages/BasketPage.vue"),
  },
  
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
