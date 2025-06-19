import Api from "@/utils/Api";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLogedIn: false,
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser.user,
    isAuthenticated: (state) => state.isLogedIn,
    hasRoles: (state) => (requiredRole) => {
      if (!state.authUser || !state.authUser.role) {
        return false;
      }
      return requiredRole.some((role) => state.authUser.role.include(role));
    },
  },
  actions: {
    async userLogin(formData) {
      try {
        const data = await Api.post("/signin", formData);
        localStorage.setItem("token", data.data.token);
        this.isLogedIn = true;
        this.authUser = data.data.user;
      } catch (error) {}
    },
    async userAuth() {
      try {
        const data = await Api.get("/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.authUser = data.data.data;
        this.isLogedIn = true;
      } catch (error) {
        if (error.status === 401) {
          localStorage.removeItem("token");
        }
      }
    },
    logout() {
      const token = localStorage.getItem("token");
      Api.delete("/signout", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      localStorage.removeItem("token");
      this.isLogedIn = false;
    },
    initializaAuth() {
      const token = localStorage.getItem("token");
      try {
        Api.get("/me", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
      } catch (e) {
        this.isLogedIn = true;
        localStorage.removeItem("token");
      }
    },
  },
});
