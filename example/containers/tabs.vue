<template>
  <div class="container">
    <page-title>
      <p>{{ section }}</p>
      <h2>{{ title }}</h2>
    </page-title>
    <div class="row">
      <nav-tabs class="col-xs-12" :tabs="tabs"/>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import NavTabs from '~/components/nav-tabs/default.vue';
import { getFormTabs } from '~/services/forms';

export default {
  props: [ 'page', 'title', 'section' ],
  computed: {
    tabs() {
      return getFormTabs(this.page);
    }
  },
  components: {
    NavTabs
  }
};
</script>
