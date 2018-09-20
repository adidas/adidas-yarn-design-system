import { isMobile } from '~/services/window';

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const SET_MOBILE = 'SET_MOBILE';

export const state = () => ({
  mobile: false,
  sidebarOpen: true
});

export const getters = {
  sidebarOpen(state) {
    return state.sidebarOpen;
  },
  mobile(state) {
    return state.mobile;
  }
};

export const actions = {
  initMobile({ commit }) {
    commit(SET_MOBILE, isMobile());
  },
  initSidebar({ commit }) {
    commit(TOGGLE_SIDEBAR, !isMobile());
  },
  navigate({ commit, state }) {
    state.mobile && commit(TOGGLE_SIDEBAR, false);
  },
  toggleSidebar({ commit, state }) {
    commit(TOGGLE_SIDEBAR, !state.sidebarOpen);
  },
  resize({ commit, state }) {
    const mobile = isMobile();

    if (state.mobile && !mobile && !state.sidebarOpen) {
      commit(TOGGLE_SIDEBAR, true);
    } else if (!state.mobile && mobile && state.sidebarOpen) {
      commit(TOGGLE_SIDEBAR, false);
    }

    state.mobile !== mobile && commit(SET_MOBILE, mobile);
  }
};

export const mutations = {
  [TOGGLE_SIDEBAR](state, open) {
    state.sidebarOpen = open;
  },
  [SET_MOBILE](state, mobile) {
    state.mobile = mobile;
  }
};
