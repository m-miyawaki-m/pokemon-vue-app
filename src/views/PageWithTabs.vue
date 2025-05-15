<script setup>
import { useTabStore } from '../stores/useTabStore'
import TabOneCard from './tabs/TabOneCard.vue'
import TabTwoCard from './tabs/TabTwoCard.vue'

const tabStore = useTabStore()

const componentMap = {
  TabOneCard,
  TabTwoCard
}
</script>

<template>
      <v-btn color="error" @click="tabStore.reset()">
    タブをリセット
  </v-btn>
  <v-container>
    <v-tabs v-model="tabStore.activeTab" show-arrows>
      <v-tab
        v-for="item in tabStore.tabs"
        :key="item.value"
        :value="item.value"
      >
        {{ item.label }}
      </v-tab>
      <v-tab
        v-if="tabStore.tabs.length < tabStore.maxTabs"
        class="add-tab-btn"
        @click.stop="tabStore.addTab"
      >
        ＋
      </v-tab>
    </v-tabs>

    <v-window v-model="tabStore.activeTab">
      <v-window-item
        v-for="item in tabStore.tabs"
        :key="item.value"
        :value="item.value"
      >
        <component :is="componentMap[item.component]" />
      </v-window-item>
    </v-window>
  </v-container>

</template>

<style scoped>
.add-tab-btn {
  min-width: 40px;
  text-align: center;
  font-weight: bold;
  color: #1976d2;
}
</style>
