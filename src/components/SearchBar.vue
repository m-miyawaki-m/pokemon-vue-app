<template>
  <v-row>
    <v-col cols="2">
      <v-text-field
        v-model="searchInput"
        label="ポケモン番号または名前"
        density="compact"
        @keyup.enter="onSearch"
      />
    </v-col>
    <v-col cols="auto">
      <v-btn color="primary" @click="onSearch">検索</v-btn>
    </v-col>
    <!-- <v-col cols="auto">
      <v-btn color="secondary" @click="emit('random')">ランダム</v-btn>
    </v-col> -->
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['search', 'random'])

const searchInput = ref('')

const onSearch = () => {
  if (!searchInput.value) return
  emit('search', searchInput.value)
}
</script>
