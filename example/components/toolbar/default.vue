<template>
  <div class="toolbar">
    <div class="toolbar__left">
      <button class="btn btn-tertiary btn-square" @click="toggleSidebar">
        <span class="yarn-icon yarn-icon--filter"
            :style="{ color: filterColor }">
        </span>
      </button>
      <span class="toolbar__vertical-divider"></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { style } from '~/services/style';

export default {
  computed: {
    ...mapGetters([ 'sidebarOpen' ]),
    filterColor() {
      return this.sidebarOpen ? style.color['blue-100'] : '';
    }
  },
  methods: {
    ...mapActions([ 'toggleSidebar' ])
  }
};
</script>
