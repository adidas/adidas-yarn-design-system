<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <h2>{{ $t('views.plugins.name') }}</h2>
          <p>{{ $t('views.plugins.description') }}</p>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <markdown-renderer type="url" :src="'plugins'"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import markdownRenderer from '~/components/markdown/renderer';

export default {
  components: {
    markdownRenderer
  }
};
</script>
