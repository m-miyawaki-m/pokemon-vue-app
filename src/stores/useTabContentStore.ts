// src/stores/tabContentStore.ts
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTabContentStore = (tabId: string) =>
  defineStore(`tabContent-${tabId}`, () => {
    const state = reactive({
      memo: ''
    })
    return { state }
  })()
