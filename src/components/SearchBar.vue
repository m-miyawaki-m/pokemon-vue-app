<template>
  <v-row>
    <!-- <v-col cols="8">
      <v-text-field v-model="name" label="ポケモン名を入力" @keyup.enter="search" />
    </v-col>
    <v-col cols="2">
      <v-btn color="primary" block @click="search">検索</v-btn>
    </v-col> -->
    <v-col cols="2">
      <v-btn color="secondary" block @click="$emit('random')">ランダム</v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
const emit = defineEmits(['search', 'random'])

const search = () => {
  if (name.value) {
    emit('search', name.value)
  }
}
</script>