import Vue from 'vue';
import PageTitle from '~/components/page-title/default.vue';
import MarkdownContainer from '~/containers/markdown.vue';
import TabsContainer from '~/containers/tabs.vue';

const components = {
  PageTitle,
  MarkdownContainer,
  TabsContainer
};

Object.entries(components).forEach(([ name, component ]) => {
  Vue.component(name, component);
});
