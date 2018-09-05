<template>
  <div class="button-group" :class="{ 'button-group--dark': dark }">
    <h5 :class=" { 'color--white': dark }">
      {{ $tc('common.button') }}
      {{ $t(`common.colors.${ name }`) }}
    </h5>
    <button :class="`btn ${ _classes }`">
      <span>{{ $t('views.components-buttons.state.active') }}</span>
    </button>
    <button :class="`btn ${ _classes } disabled`">
      {{ $t('views.components-buttons.state.inactive') }}
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
