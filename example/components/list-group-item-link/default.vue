<template>
  <div :class="[ 'list-group-item', themeClass, stateClass ]">
    <a class="link" href="#">
      <span v-if="iconLeft" :class="[ 'yarn-icon', `yarn-icon--${ icon }` ]">
      </span>
      <span class="label">{{ $t(label) }}</span>
      <span v-if="iconRight" :class="[ 'yarn-icon', `yarn-icon--${ icon }` ]">
      </span>
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
    stateClass() {
      return this.state || '';
    },
    iconLeft() {
      return !!this.icon || this.icon === 'left';
    },
    iconRight() {
      return this.icon === 'right';
    }
  }
};
</script>

