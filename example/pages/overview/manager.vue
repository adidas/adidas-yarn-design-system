<template>
  <markdown-container :src="'overview.manager'">
    <template slot="header">
      <p>{{ $t('views.overview.name') }}</p>
      <h2>{{ $t('views.overview-manager.description') }}</h2>
    </template>
  </markdown-container>
</template>
