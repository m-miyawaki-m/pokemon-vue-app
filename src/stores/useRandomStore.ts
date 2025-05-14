import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    cards: []
  }),
  actions: {
    addCard(card) {
      this.cards.unshift(card)
      if (this.cards.length > 4) this.cards.pop()
    },
    clearCards() {
      this.cards = []
    }
  }
})
