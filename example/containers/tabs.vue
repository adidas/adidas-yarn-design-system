<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <p>{{ $t('views.components.name') }}</p>
          <h2>{{ title }}</h2>
        </div>
      </div>
    </div>
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
  props: [ 'page', 'title' ],
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
