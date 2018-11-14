<template>
  <markdown-container :src="'overview.developer'">
    <template slot="header">
      <p>{{ $t('views.overview.name') }}</p>
      <h2>{{ $t('views.overview-developer.description') }}</h2>
    </template>
  </markdown-container>
</template>
