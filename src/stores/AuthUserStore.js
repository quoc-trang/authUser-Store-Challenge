// define your Pinia store here

import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

// use either an options store or a setup store as you prefer
export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const user = ref();

  async function login({ username, password }) {
    const response = await fetch("/api/users.json");
    const users = await response.json();

    user.value = users.find((user) => {
      return user.username === username && user.password === password;
    });

    if (!user.value) {
      throw new Error("invalid credentials");
    }
  }

  function logout() {
    router.push("/login");
    user.value = undefined;
  }

  return {
    user,
    logout,
    login,
  };
});
