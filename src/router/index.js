import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/asset",
      name: "asset",
      children: [
        {
          path: "",
          name: "asset.index",
          component: () => import("../views/Asset/index.vue"),
        },
        {
          path: "create",
          name: "asset.create",
          component: () => import("../views/Asset/create.vue"),
        },
        {
          path: ":id/detail",
          name: "asset.detail",
          component: () => import("../views/Asset/detail.vue"),
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
        },
        {
          path: "create",
          name: "building.create",
          component: () => import("../views/Building/create.vue"),
        },
        {
          path: ":id/detail",
          name: "building.detail",
          component: () => import("../views/Building/detail.vue"),
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
        },
        {
          path: "create",
          name: "armada.create",
          component: () => import("../views/Armada/create.vue"),
        },
        {
          path: ":id/detail",
          name: "armada.detail",
          component: () => import("../views/Armada/detail.vue"),
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
        },
        {
          path: ":id/detail",
          name: "vendor.detail",
          component: () => import("../views/Vendor/detail.vue"),
        },
      ],
    },
    {
      path: "/report",
      name: "report",
      children: [
        {
          path: "repair",
          name: "report.repair",
          component: () => import("../views/Report/repair.vue"),
        },
        {
          path: "asset",
          name: "report.asset",
          component: () => import("../views/Report/asset.vue"),
        },
      ],
    },
  ],
});

export default router;
