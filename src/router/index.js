import { useAuthStore } from "@/stores/authStore";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Authentication/login.vue"),
      meta: { isAuth: false },
    },
    {
      path: "/asset",
      name: "asset",
      children: [
        {
          path: "",
          name: "asset.index",
          component: () => import("../views/Asset/index.vue"),
          meta: { isAuth: true },
        },
        {
          path: "create",
          name: "asset.create",
          component: () => import("../views/Asset/create.vue"),
          meta: { isAuth: true },
        },
        {
          path: ":id/detail",
          name: "asset.detail",
          component: () => import("../views/Asset/detail.vue"),
          meta: { isAuth: true },
        },
      ],
    },
    {
      path: "/building",
      name: "building",
      children: [
        {
          path: "",
          name: "building.index",
          component: () => import("../views/Building/index.vue"),
          meta: { isAuth: true },
        },
        {
          path: "create",
          name: "building.create",
          component: () => import("../views/Building/create.vue"),
          meta: { isAuth: true },
        },
        {
          path: ":id/detail",
          name: "building.detail",
          component: () => import("../views/Building/detail.vue"),
          meta: { isAuth: true },
        },
      ],
    },
    {
      path: "/armada",
      name: "armada",
      children: [
        {
          path: "",
          name: "armada.index",
          component: () => import("../views/Armada/index.vue"),
          meta: { isAuth: true },
        },
        {
          path: "create",
          name: "armada.create",
          component: () => import("../views/Armada/create.vue"),
          meta: { isAuth: true },
        },
        {
          path: ":id/detail",
          name: "armada.detail",
          component: () => import("../views/Armada/detail.vue"),
          meta: { isAuth: true },
        },
      ],
    },
    {
      path: "/vendor",
      name: "vendor",
      children: [
        {
          path: "",
          name: "vendor.index",
          component: () => import("../views/Vendor/index.vue"),
          meta: { isAuth: true },
        },
        {
          path: ":id/detail",
          name: "vendor.detail",
          component: () => import("../views/Vendor/detail.vue"),
          meta: { isAuth: true },
        },
      ],
    },
    {
      path: "/report",
      name: "report",
      meta: { isAuth: true },
      children: [
        {
          path: "repair",
          name: "report.repair",
          component: () => import("../views/Report/repair.vue"),
          meta: { isAuth: true, authRole: ["admin"] },
        },
        {
          path: "asset",
          name: "report.asset",
          component: () => import("../views/Report/asset.vue"),
          meta: { isAuth: true, authRole: ["admin"] },
        },
      ],
    },
    {
      path: "/repair",
      name: "repair",
      children: [
        {
          path: "",
          name: "repair.index",
          component: () => import("../views/Repair/index.vue"),
          meta: { isAuth: true },
        },
        {
          path: ":id/detail",
          name: "repair.detail",
          component: () => import("../views/Repair/detail.vue"),
          meta: { isAuth: true },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthentication = useAuthStore();
  isAuthentication.initializaAuth();
  if (to.name !== "login" && localStorage.getItem("token") === null) {
    next({ path: "/login" });
  }
  if (to.name === "login" && localStorage.getItem("token") !== null) {
    next({ path: "/asset" });
  }
  next();
});

export default router;
