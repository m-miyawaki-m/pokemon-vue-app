<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab value="one">タブ1</v-tab>
      <v-tab value="two">タブ2</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="one">
        <TabOneCard />
      </v-window-item>
      <v-window-item value="two">
        <TabTwoCard />
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import TabOneCard from './tabs/TabOneCard.vue'
import TabTwoCard from './tabs/TabTwoCard.vue'

const tab = ref('one')
</script>
