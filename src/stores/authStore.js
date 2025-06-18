import Api from "@/utils/Api";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("user", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async userAuth() {
      try {
        const data = await Api.get("/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.authUser = data.data.data;
      } catch (error) {
        if (error.status === 401) {
          localStorage.removeItem("token");
        }
      }
    },
  },
});
