<template>
  <div class="page-container">
    <headerbar/>
    <tabbar/>
    <toolbar/>
    <main class="main">
      <sidebar/>
      <nuxt/>
    </main>
    <foot/>
  </div>
</template>

<script>
import sidebar from '~/components/sidebar/default';
import headerbar from '~/components/headerbar/default';
import tabbar from '~/components/tabbar/default';
import toolbar from '~/components/toolbar/default';
import foot from '~/components/foot/default';

export default {
  components: {
    sidebar,
    headerbar,
    tabbar,
    toolbar,
    foot
  }
};
</script>

<style lang="less">
  @import '../../src/less/variables/main';

  .main {
    @media screen and (max-width: @screen-xs-max) {
      margin-bottom: 10rem;
    }
  }
</style>
