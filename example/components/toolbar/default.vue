<template>
  <div class="toolbar">
    <div class="toolbar__left">
      <button class="btn btn-tertiary toolbar__btn-square toolbar__toggle" @click="toggleToolbar">
        <span class="yarn-icon yarn-icon--filter"
            :class="{ 'color--blue-100': $store.state.sidebarOpen }">
        </span>
      </button>
      <span class="toolbar__vertical-divider"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleToolbar() {
      this.$store.commit('toggleSidebar');
    }
  }
};
</script>
