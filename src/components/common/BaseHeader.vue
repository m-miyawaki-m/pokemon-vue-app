<template>
  <v-app-bar app color="primary" dark>
    <!-- <v-toolbar-title>ヘッダー表示テスト</v-toolbar-title> -->
    <v-breadcrumbs :items="breadcrumbs" divider=">"/>
  </v-app-bar>
</template>

<script setup>
const breadcrumbs = [
  { title: 'ホーム', disabled: false, href: '/' },
  { title: 'ポケモン検索', disabled: true },
];
</script>
