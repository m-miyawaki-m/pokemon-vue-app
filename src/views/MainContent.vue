<template>
  <div>
    <Header1 v-if="showHeader1" />
    <Header2 v-if="showHeader2" />
    <SubArea v-if="showSub" />
    <MainArea v-if="showMain" />
  </div>
</template>

<script setup>
import Header1 from './mainContents/Header1.vue'
import Header2 from './mainContents/Header2.vue'
import MainArea from './mainContents/MainArea.vue'
import SubArea from './mainContents/SubArea.vue'

defineProps({
  showHeader1: Boolean,
  showHeader2: Boolean,
  showSub: Boolean,
  showMain: Boolean,
})
</script>
