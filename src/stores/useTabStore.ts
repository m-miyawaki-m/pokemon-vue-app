// stores/useTabStore.ts
import { defineStore } from 'pinia'

export type ComponentName = 'TabOneCard' | 'TabTwoCard'

export interface TabItem {
  label: string
  value: string
  component: ComponentName
}


export const useTabStore = defineStore('tab', {
  state: () => ({
    tabs: [] as TabItem[],
    activeTab: '',
    maxTabs: 5,
    isInitialized: false // ← 初期化完了フラグ
  }),
  actions: {
  async initializeFromJson() {
    try {
      const response = await fetch('/pokemon-vue-app/tabStoreSample/tabs.json')
      const data = await response.json() as TabItem[]

      if (Array.isArray(data) && data.length > 0) {
        this.tabs.splice(0, this.tabs.length, ...data)
        this.activeTab = data[0].value
      } else {
        this.tabs = []
        this.activeTab = ''
      }
    } catch (e) {
      console.error('タブ初期化失敗:', e)
      this.tabs = []
      this.activeTab = ''
    } finally {
      this.isInitialized = true
    }
  }
,
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
      this.tabs = []
      this.activeTab = ''
    }
  }
})
