import debounce from 'lodash.debounce';

const DEBOUNCE_TIMEOUT = 100;

export default ({ store }) => {
  if (process.browser) {
    store.dispatch('initMobile');
    store.dispatch('initSidebar');

    window.addEventListener('resize', debounce(() => {
      store.dispatch('resize');
    }, DEBOUNCE_TIMEOUT));
  }
};
