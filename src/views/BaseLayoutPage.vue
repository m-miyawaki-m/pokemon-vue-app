<template>
  <MainContent
    :show-header1="flags.header1"
    :show-header2="flags.header2"
    :show-sub="flags.sub"
    :show-main="flags.main"
  />
</template>

<script setup>
import { reactive } from 'vue';
import MainContent from './MainContent.vue';

// 表示・非表示の制御フラグ（実際は状態管理から取ってもOK）
const flags = reactive({
  header1: true,
  header2: true,
  sub: true,
  main: true,
})
</script>
