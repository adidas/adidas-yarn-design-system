<template>
  <markdown-container :src="'overview.designer'">
    <template slot="header">
      <p>{{ $t('views.overview.name') }}</p>
      <h2>{{ $t('views.overview-designer.description') }}</h2>
    </template>
  </markdown-container>
</template>
