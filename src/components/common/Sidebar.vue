<template>
  <v-navigation-drawer app permanent width="200">
    <v-list nav dense>
      <v-list-item to="/" title="ホーム" prepend-icon="mdi-home" />
      <v-list-item to="/search" title="ポケモン検索" prepend-icon="mdi-pokeball" />
      <v-list-item to="/random" title="ランダム検索" prepend-icon="mdi-dice-multiple" />
      <!-- ✅ 追加 -->
      <v-list-item to="/list" title="ポケモン一覧" prepend-icon="mdi-format-list-bulleted" />
      <v-list-item to="/tabs" title="タブページ" prepend-icon="mdi-tab" />
    </v-list>
  </v-navigation-drawer>
</template>
