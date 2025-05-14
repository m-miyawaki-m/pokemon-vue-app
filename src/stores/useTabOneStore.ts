import { defineStore } from 'pinia'

export const useTabStore = defineStore('tabStore', {
  state: () => ({
    tabOneText: ''
  }),
  actions: {
    updateTabOneText(val) {
      this.tabOneText = val
    }
  }
})
