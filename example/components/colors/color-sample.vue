<template>
  <div class="color-sample" :class="classes">
    @{{ name }} {{ hex }}
  </div>
</template>

<script>
export default {
  props: [ 'name', 'classes' ],
  data() {
    return {
      hex: null
    };
  },
  methods: {
    componentToHex(component) {
      const hex = Number(component).toString(16);

      return hex.length === 1 ? `0${ hex }` : hex;
    },
    getColor() {
      const rgb = window.getComputedStyle(this.$el).getPropertyValue('background-color');
      const [ r, g, b, opacity ] = rgb.replace('rgb(', '')
        .replace(/rgba\(|\)/g, '')
        .split(', ');
      const color = [ [ r, g, b ].map(this.componentToHex).join('') ];

      typeof opacity === 'string' && color.push(`Opacity: ${ opacity }`);

      return `#${ color.join(', ') }`;
    }
  },
  mounted() {
    this.hex = this.getColor();
  }
};
</script>

<style lang="less">
  @import '../../../src/less/variables/main';

  .color-sample {
    margin: @padding-large-vertical 0;
    padding: @padding-large-vertical;

    &.border--black {
      border: 1px solid @primary-black;
    }
  }
</style>
