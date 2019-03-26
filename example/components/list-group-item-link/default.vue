<template>
  <div :class="[ 'list-group-item', themeClass, state ]">
    <a class="link" href="#">
      <span v-if="iconLeft" :class="[ 'yarn-icon', `yarn-icon--${ icon }` ]"></span>
      <span class="label">{{ $t(label) }}</span>
      <span v-if="iconRight" :class="[ 'yarn-icon', `yarn-icon--${ icon }` ]"></span>
    </a>
  </div>
</template>

<script>
export default {
  props: [ 'theme', 'state', 'icon', 'position', 'label' ],
  computed: {
    themeClass() {
      return this.theme ? `list-group-item--${ this.theme }` : '';
    },
    iconLeft() {
      return !this.position || this.position === 'left';
    },
    iconRight() {
      return this.position === 'right';
    }
  }
};
</script>

