<template>
  <aside class="sidebar"
      :class="{
        open: sidebarOpen,
        closed: !sidebarOpen
      }">
    <div class="sidebar__main">
      <div class="panel-group">
        <template v-for="route in routes">
          <panel-tab v-if="route.children"
              :key="route.name"
              :name="`sidebar${ route.name }`">
            <nuxt-link class="panel-title__title link label"
                :to="{ name: route.name }"
                slot="tabTitle"
                @click.native="navigate">
              {{ $t(`views.${ route.name }.name`) }}
            </nuxt-link>
            <ul class="list-group list-group--vertical" slot="tabContent">
              <li class="list-group-item list-group-item-light"
                  v-for="subroute in route.children"
                  :key="subroute.name">
                <nuxt-link class="link label"
                    :to="{ name: subroute.name }"
                    @click.native="navigate">
                  {{ $t(`views.${ subroute.name }.name`) }}
                </nuxt-link>
              </li>
            </ul>
          </panel-tab>
          <panel-item v-else :key="route.name">
            <nuxt-link class="link label"
                :to="{ name: route.name }"
                @click.native="navigate">
              {{ $t(`views.${ route.name }.name`) }}
            </nuxt-link>
          </panel-item>
        </template>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { getRoutes } from '~/services/routes';
import panelItem from './panel-item.vue';
import panelTab from './panel-tab.vue';

export default {
  computed: {
    ...mapGetters([ 'sidebarOpen' ]),
    routes() {
      const routes = [];
      const sidebarRoutes = getRoutes()
        .filter(({ meta: { showInSidebar } }) => showInSidebar)
        .map((route) => ({
          name: route.name,
          displayName: route.meta.displayName || route.name,
          order: typeof route.meta.sidebarPosition === 'number' ? route.meta.sidebarPosition : Infinity
        }))
        .sort((e1, e2) => e1.order - e2.order);

      for (const route of sidebarRoutes) {
        const parentName = route.name.substr(0, route.name.lastIndexOf('-'));
        const parentRoute = routes.find(({ name }) => name === parentName);

        if (parentRoute) {
          parentRoute.children = parentRoute.children || [];
          parentRoute.children.push(route);
        } else {
          routes.push(route);
        }
      }

      return routes;
    }
  },
  methods: {
    ...mapActions([ 'navigate' ])
  },
  components: {
    panelItem,
    panelTab
  }
};
</script>

<style lang="less">
  @import '../../../src/less/variables/main';

  .yarn .sidebar__block {
    height: 100%;

    .panel-group .panel {
      border: none;
      border-bottom: 1px solid @primary-lightgray;

      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>
