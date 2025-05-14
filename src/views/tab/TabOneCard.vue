<script setup>
import { useTabStore } from '../../stores/useTabOneStore';

const store = useTabStore()
</script>

<template>
  <v-card class="ma-4 pa-4">
    <v-card-title>タブ1のカード</v-card-title>
    <v-card-text>
      <v-text-field
        label="メモ"
        v-model="store.tabOneText"
        placeholder="ここに入力..."
        outlined
      />
    </v-card-text>
  </v-card>
</template>
