<script setup lang="ts">
import { useTabContentStore } from '../../stores/useTabContentStore';

const props = defineProps<{ tabId: string }>()
const store = useTabContentStore(props.tabId)
</script>

<template>
  <v-card class="ma-4 pa-4">
    <v-card-title>タブ {{ props.tabId }} のカード</v-card-title>
    <v-card-text>
      <v-text-field
        label="メモ"
        v-model="store.state.memo"
        placeholder="ここに入力..."
        outlined
      />
    </v-card-text>
  </v-card>
</template>
