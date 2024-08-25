import { createWebHistory, createRouter } from "vue-router";
import LogInView from "../views/LogIn.vue";
import UserProfileView from "../views/UserProfile.vue";
import { useAuthStore } from "../stores/AuthUserStore";

const routes = [
  { path: "/", component: UserProfileView, meta: { requiresAuth: true } },
  { path: "/login", component: LogInView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const store = useAuthStore();
  if (to.meta.requiresAuth && !store.user) {
    return "/login";
  }
});
