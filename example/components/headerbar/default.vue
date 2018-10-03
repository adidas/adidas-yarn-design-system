<template>
  <header class="header">
    <nav class="header__container">
      <div class="header__left">
        <nuxt-link class="header__brand" :to="{ name: 'index' }">
          <span class="header__icon yarn-logo yarn-logo--adidas"></span>
          <span class="header__headline">
            {{ $t('meta.yarn') }}
          </span>
        </nuxt-link>
      </div>
      <div class="header__right">
        <a class="header__icon header__icon--light" :href="$t('repository.url')" target="blank">
          <img class="header__icon--img" src="~/static/github-mark-light.png"/>
        </a>
        <nuxt-link class="btn btn-primary"
            :to="{ name: 'overview' }"
            v-if="$nuxt.$route.name === 'index'">
          {{ $t('views.index.get-started') }}
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>
