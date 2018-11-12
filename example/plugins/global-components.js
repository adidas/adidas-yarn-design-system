import Vue from 'vue';
import TabsContainer from '~/containers/tabs.vue';

const components = {
  TabsContainer
};

Object.entries(components).forEach(([ name, component ]) => {
  Vue.component(name, component);
});
