import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "sxw",
    age: 23,
  }),
  actions: {
    edit(name: string, age: number) {
      this.$patch({
        name,
        age,
      });
    },
    reset() {
      this.$patch({
        name: "",
        age: undefined,
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
