<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <p>{{ $t('views.foundation.name') }}</p>
          <h2>{{ $t('views.foundation-icons.name') }}</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1">
        <section class="row icons">
          <div class="col-xs-12 col-sm-6 col-lg-4 icon"
              v-for="icon in icons"
              :key="icon.code">
            <span :class="icon.className"></span>
            <span class="icon__name">{{ icon.className }}</span>
            <span class="icon__code" :title="`content: ${ icon.code };`">{{ icon.code }}</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { icons } from '~/services/icons';

export default {
  computed: {
    icons() {
      return icons.map((icon) => {
        const { name, code } = icon;

        return {
          className: `yarn-icon yarn-icon--${ name }`,
          code
        };
      });
    }
  }
};
</script>

<style lang="less">
  @import '../../../src/less/variables/main';
  @import '../../../src/less/mixins/flexbox';

  .icons {
    color: @primary-nickel;

    .icon {
      border-bottom: 1px solid @primary-lightgray;
      padding-top: @padding-base-vertical;
      padding-bottom: @padding-base-vertical;
      display: flex;

      .yarn-icon {
        font-size: 4.5rem;
      }

      &__name {
        font-style: italic;
        margin-left: @padding-large-horizontal;
        line-height: 1;
        align-items: center;
        .flex(row);
      }

      &__code {
        font-size: @font-size-small;
        font-style: italic;
        font-weight: 100;
        position: absolute;
        right: 0;
      }

      &:hover {
        color: @blue-100;
      }
    }
  }
</style>
