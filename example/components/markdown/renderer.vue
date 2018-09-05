<template>
  <div class="markdown" v-html="document"></div>
</template>

<script>
import { Converter } from 'showdown';
import { getMarkdownFile } from '~/services/markdown';

const HEADER_LEVEL_START = 3;
const converter = new Converter();

converter.setFlavor('github');
converter.setOption('headerLevelStart', HEADER_LEVEL_START);
converter.setOption('openLinksInNewWindow', true);

export default {
  name: 'markdown-renderer',
  props: [ 'src' ],
  data() {
    return {
      document: null
    };
  },
  mounted() {
    if (this.src) {
      const document = getMarkdownFile(this.src, this.$nuxt.$options.lang);

      this.document = converter.makeHtml(document);
    }
  }
};
</script>
