// src/stores/usePokemonListStore.js
import { defineStore } from 'pinia'

export const usePokemonListStore = defineStore('pokemonList', {
  state: () => ({
    allPokemon: [] // ✅ これがないと undefined になります
  }),
  actions: {
    setAllPokemon(list) {
      this.allPokemon = list
    }
  }
})
