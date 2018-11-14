<template>
  <ul class="nav nav-pills">
    <li class="nav-tab"
        v-for="{ id, to, active } in tabs"
        :key="id"
        :class="{ active: active }">
      <nuxt-link class="nav-link" :to="to">
        {{ $t(`tabs.${ id }`) }}
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
