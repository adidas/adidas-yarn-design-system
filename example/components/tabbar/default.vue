<template>
  <div class="tabbar">
    <ul class="list-group list-group--horizontal">
      <li class="list-group-item" v-for="route in routes" :key="route.name">
        <nuxt-link class="link text-uppercase" :to="{ name: route.name }" active-class="active">
          {{ $t(`views.${route.name}.name`) }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRoutes } from '~/services/routes';

export default {
  computed: {
    routes() {
      return getRoutes()
      .filter(({ meta: { showInTabbar } }) => showInTabbar)
      .map((route) => ({
        name: route.name,
        displayName: route.meta.displayName || route.name,
        order: typeof route.meta.tabbarPosition === 'number' ? route.meta.tabbarPosition : Infinity
      }))
      .sort((route1, route2) => route1.order - route2.order);
    }
  }
};
</script>
