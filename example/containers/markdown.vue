<template>
  <div class="container">
    <page-title>
      <p>{{ section }}</p>
      <h2>{{ title }}</h2>
    </page-title>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <markdown-renderer type="url" :src="src"/>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import MarkdownRenderer from '~/components/markdown/renderer';

export default {
  props: [ 'src', 'title', 'section' ],
  components: {
    MarkdownRenderer
  }
};
</script>
