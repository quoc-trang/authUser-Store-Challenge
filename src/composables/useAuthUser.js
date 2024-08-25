import { ref } from "vue";
import { useRouter } from "vue-router";

const user = ref();

export const useAuthUser = () => {
  const router = useRouter();

  // This login function is a mock function that checks if the username and password are valid
  // In a real-world application, you would send a request to the server to validate the user
  async function login({ username, password }) {
    const res = await fetch("/api/users.json");
    const users = await res.json();

    user.value = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (!user.value) {
      throw new Error("Invalid username or password");
    }
  }

  // Logs out the user and redirects to the login page
  function logout() {
    router.push("/login");
    user.value = undefined;
  }

  return {
    user, // the logged in user data
    login, // a function to login the user
    logout, // a function to logout the user
  };
};
