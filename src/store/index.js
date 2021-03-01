import { createStore } from "vuex";
import { saveData, getData } from "@/utils/saveInfoInLocal";

export default createStore({
  state: {
    name: getData("NAME") ? getData("NAME") : ""
  },
  mutations: {
    SET_NAME(state, data) {
      state.name = data;
    }
  },
  actions: {
    setName({ commit }, name) {
      saveData("NAME", name);
      commit("SET_NAME", name);
    }
  },
  modules: {}
});
