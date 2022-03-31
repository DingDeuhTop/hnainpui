const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/Index.vue") },
      { path: "", component: () => import("pages/home.vue") },
      {
        path: "professional",
        component: () => import("pages/professional.vue"),
      },
      { path: "job", component: () => import("pages/job.vue") },
      { path: "register", component: () => import("pages/register.vue") },
      {
        path: "verification",
        component: () => import("pages/verification.vue"),
      },
      {
        path: "detail",
        component: () => import("pages/detail.vue"),
      },
      {
        path: "enquire",
        component: () => import("pages/enquire.vue"),
      },
      {
        path: "register",
        component: () => import("pages/register.vue"),
      },
      {
        path: "account",
        component: () => import("pages/account.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
