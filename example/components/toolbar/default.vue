<template>
  <div class="toolbar">
    <div class="toolbar__left">
      <button class="btn btn-tertiary btn-square" @click="toggleSidebar">
        <span class="yarn-icon yarn-icon--filter"
            :class="filterColorClass">
        </span>
      </button>
      <span class="toolbar__vertical-divider"></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([ 'sidebarOpen' ]),
    filterColorClass() {
      return this.sidebarOpen ? 'color--blue-100' : '';
    }
  },
  methods: {
    ...mapActions([ 'toggleSidebar' ])
  }
};
</script>
