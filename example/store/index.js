import Vuex from 'vuex';

const createStore = () => new Vuex.Store({
  state: {
    sidebarOpen: true
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    }
  }
});

export default createStore;
