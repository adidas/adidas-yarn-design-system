<template>
  <markdown-container :src="'plugins'">
    <template slot="header">
      <p>{{ $t('views.plugins.name') }}</p>
      <h2>{{ $t('views.plugins.description') }}</h2>
    </template>
  </markdown-container>
</template>
