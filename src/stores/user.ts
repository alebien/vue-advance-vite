import { defineStore, acceptHMRUpdate } from "pinia";

interface UserState {
  name: string;
  age: number;
  weight: number;
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "sxw",
    age: 23,
    weight: 80,
  } as UserState),
  actions: {
    edit(name: string, age: number):number {
      this.$patch({
        name,
        age,
      });
      return 0;
    },
    reset():void {
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
