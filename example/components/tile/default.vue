<template>
  <div class="tile">
    <div class="tile__main" :style="{ backgroundImage: `url(${ image })` }">
      <div class="tile__main--type" v-if="type">
        {{ type }}
      </div>
      <div class="tile__main--flag" v-if="flag">
        <span :class="`yarn-icon yarn-icon--${ flag }`"></span>
      </div>
    </div>
    <div class="tile__footer">
      <div class="tile__footer__group">{{ title }}</div>
      <div class="tile__footer__subheader">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: '',
    image: '',
    type: '',
    flag: ''
  }
};
</script>
