import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    comment: [],
    userNumber: 0,
    isDraw: ""
  },
  mutations: {
    SET_NAME(state, data) {
      state.name = data;
    },
    SET_COMMENT(state, data) {
      state.comment = data;
    },
    SET_USER_NUMBER(state, data) {
      state.userNumber = data;
    },
    SET_DRAWING(state, data) {
      state.isDraw = data;
    }
  },
  actions: {
    setName({ commit }, name) {
      commit("SET_NAME", name);
    },
    setComment({ commit }, comment) {
      commit("SET_COMMENT", comment);
    },
    setUserNumber({ commit }, number) {
      commit("SET_USER_NUMBER", number);
    },
    setDrawing({ commit }, drawing) {
      commit("SET_DRAWING", drawing);
    }
  },
  modules: {}
});
