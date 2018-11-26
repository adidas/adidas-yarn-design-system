<template>
  <span class="tag" :class="{ 'tag--selected': selected }">
    <span class="tag__label">{{ label }}</span>
    <button class="tag__icon tag__icon--remove yarn-icon yarn-icon--close"
        v-if="removable">
    </button>
  </span>
</template>

<script>
export default {
  props: [ 'label', 'removable', 'selected' ]
};
</script>
