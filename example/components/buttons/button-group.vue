<template>
  <div class="button-group" :class="{ 'button-group--dark': dark }">
    <h6 :class=" { 'color--primary-white': dark }">
      {{ $tc('common.button') }}
      {{ $t(`common.colors.${ name }`) }}
    </h6>
    <button :class="`btn ${ _classes } active`">
      {{ $t('common.state.active') }}
    </button>
    <button :class="`btn ${ _classes }`">
      {{ $t('common.state.default') }}
    </button>
    <button :class="`btn ${ _classes } disabled`">
      {{ $t('common.state.inactive') }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    classes: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _classes() {
      return this.classes || `btn--${ this.name }`;
    }
  }
};
</script>

<style lang="less">
  @import '../../../src/less/variables/main';

  .button-group {
    padding: @padding-base-vertical 0;

    &.button-group--dark {
      background: @primary-black;
      padding: @padding-base-vertical;
      display: inline-block;
    }
  }
</style>
