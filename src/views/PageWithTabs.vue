<script setup lang="ts">
import { onMounted } from 'vue'
import { useTabStore } from '../stores/useTabStore'
import TabOneCard from './tabs/TabOneCard.vue'
import TabTwoCard from './tabs/TabTwoCard.vue'

const tabStore = useTabStore()

const componentMap = {
  TabOneCard,
  TabTwoCard
}

onMounted(() => {
  tabStore.initializeFromJson()
})
</script>


<template>
  <v-btn color="error" @click="tabStore.reset()">
    タブをリセット
  </v-btn>

  <!-- v-container 修正：fluid + クラスで余白除去 -->
  <v-container class="no-margin-container" fluid>
    <v-tabs v-model="tabStore.activeTab" show-arrows style="width: 100%;">
      <v-tab v-for="item in tabStore.tabs" :key="item.value" :value="item.value">
        {{ item.label }}
      </v-tab>
      <v-tab v-if="tabStore.tabs.length < tabStore.maxTabs" class="add-tab-btn" @click.stop="tabStore.addTab">
        ＋
      </v-tab>
    </v-tabs>

    <v-window v-if="tabStore.tabs.length > 0" v-model="tabStore.activeTab" style="height: 600px;">
      <v-window-item v-for="item in tabStore.tabs" :key="item.value" :value="item.value">
        <component :is="componentMap[item.component]" :tab-id="item.value" />
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

/* 左余白を除去するためのクラス */
.no-margin-container {
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>
