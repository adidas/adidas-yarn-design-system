<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <p>{{ $t('views.overview.name') }}</p>
          <h2>{{ $t('views.overview-developer.description') }}</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <markdown-renderer type="url" :src="src"/>
      </div>
    </div>
  </div>
</template>

<script>
import markdownRenderer from '~/components/markdown/renderer';

export default {
  data() {
    return {
      src: 'overview.developer'
    };
  },
  components: {
    markdownRenderer
  }
};
</script>
