<template>
  <div class="container">
    <div class="row">
      <nav-tabs class="col-xs-12" :tabs="tabs"/>
    </div>
    <page-title>
      <slot name="header"></slot>
    </page-title>
    <slot name="content"></slot>
  </div>
</template>

<script>
import NavTabs from '~/components/nav-tabs/default.vue';
import { getFormTabs } from '~/services/forms';

export default {
  props: [ 'page' ],
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
