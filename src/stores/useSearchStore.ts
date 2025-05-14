import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    cards: []
  }),
  actions: {
    addCard(card) {
      this.cards.unshift(card)
      if (this.cards.length > 4) this.cards.pop()
    },
    clear() {
      this.cards = []
    }
  }
})
