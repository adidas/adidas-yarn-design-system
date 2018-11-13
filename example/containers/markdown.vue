<template>
  <div class="container">
    <page-title>
      <slot name="header"></slot>
    </page-title>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <markdown-renderer type="url" :src="src"/>
      </div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
import MarkdownRenderer from '~/components/markdown/renderer';

export default {
  props: [ 'src' ],
  components: {
    MarkdownRenderer
  }
};
</script>
