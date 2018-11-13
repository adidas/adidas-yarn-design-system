<template>
  <ul class="nav nav-pills">
    <li class="nav-tab"
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ active: tab.active }">
      <nuxt-link class="nav-link"
          :to="tab.to">
        {{ $t(`tabs.${ tab.id }`) }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'nav-tabs',
  props: [ 'tabs' ]
};
</script>

<style lang="less">
  .nav.nav-pills {
    margin-bottom: 0;
  }
</style>
