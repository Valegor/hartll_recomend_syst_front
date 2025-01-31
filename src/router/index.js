import { createWebHistory, createRouter } from "vue-router";
import anatomy from "@/router/routes/anatomy";
import exercises from "@/router/routes/exercises";
import others from "@/router/routes/others";
import Musculus from "@/components/pages/anatomy/Musculus.vue";

const routes = [
  ...anatomy,
  ...exercises,
  ...others,
  {
    path: "/",
    name: "musculus",
    component: Musculus,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
