// src/stores/tabStore.ts
import { defineStore } from 'pinia'

export const useTabStore = defineStore('tab', {
  state: () => ({
    tabs: [
      { label: 'タブ1', value: 'one', component: 'TabOneCard' },
      { label: 'タブ2', value: 'two', component: 'TabTwoCard' }
    ],
    activeTab: 'one',
    maxTabs: 5
  }),
  actions: {
    addTab() {
      if (this.tabs.length >= this.maxTabs) return
      const newIndex = this.tabs.length + 1
      const newValue = `tab${newIndex}`
      this.tabs.push({
        label: `タブ${newIndex}`,
        value: newValue,
        component: 'TabOneCard'
      })
      this.activeTab = newValue
    },

    reset() {
      // 初期状態に戻す
      this.tabs = [
        { label: 'タブ1', value: 'one', component: 'TabOneCard' },
        { label: 'タブ2', value: 'two', component: 'TabTwoCard' }
      ]
      this.activeTab = 'one'
    }
  }
})
