<template>
  <div class="container">
    <page-title>
      <p>{{ $t('views.components.name') }}</p>
      <h2>{{ $t('views.components-tags.name') }}</h2>
    </page-title>
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1">
        <section class="section">
          <h5>{{ $t('views.components-tags.horizontal') }}</h5>
          <span class="tag-list tag-list--horizontal">
            <tag v-for="tag in tags"
                :key="tag"
                :label="tag">
            </tag>
          </span>
        </section>
        <section class="section">
          <h5>{{ $t('views.components-tags.vertical') }}</h5>
          <span class="tag-list tag-list--vertical">
            <tag v-for="tag in tags"
                :key="tag"
                :label="tag">
            </tag>
          </span>
        </section>
        <section class="section">
          <h5>{{ $t('views.components-tags.selected') }}</h5>
          <span class="tag-list tag-list--horizontal">
            <tag v-for="tag in tags"
                :key="tag"
                :label="tag"
                :selected="true">
            </tag>
          </span>
        </section>
        <section class="section">
          <h5>{{ $t('views.components-tags.removable') }}</h5>
          <span class="tag-list tag-list--horizontal">
            <tag v-for="tag in tags"
                :key="tag"
                :label="tag"
                :removable="true">
            </tag>
          </span>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '~/components/tag/default';

export default {
  data() {
    return {
      tags: [ 'size: 8-', 'color: scarlet', 'sport: running', 'technology: boost' ]
    };
  },
  components: {
    Tag
  }
}
</script>
