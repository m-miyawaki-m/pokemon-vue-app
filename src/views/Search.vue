<template>
  <v-container fluid class="pa-4">
    <SearchBar @search="fetchPokemon"/>

    <!-- ✅ ローディング表示 -->
    <v-container v-if="loading" class="d-flex justify-center my-4">
      <v-progress-circular indeterminate color="primary" size="40" />
    </v-container>

    <!-- ✅ カード表示（ローディングでないとき） -->
    <v-row dense v-else-if="store.cards.length">
      <v-col
        v-for="(card, index) in store.cards"
        :key="index"
        cols="auto"
      >
        <PokemonCard
          :pokemon="card.pokemon"
          :pokedex-numbers="card.pokedexNumbers"
          :japanese-name="card.japaneseName"
          :show-regional="showRegional"
        />
      </v-col>
    </v-row>
    <v-alert v-else type="info" class="ma-4">
      表示するポケモンがまだありません。
    </v-alert>
  </v-container>
</template>


<script setup>
import axios from 'axios'
import { ref } from 'vue'
import PokemonCard from '../components/PokemonCard.vue'
import SearchBar from '../components/SearchBar.vue'
import { useSearchStore } from '../stores/useSearchStore'

const store = useSearchStore()
const loading = ref(false)
const showRegional = ref(false)

const fetchPokemon = async (input) => {
  loading.value = true
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${String(input).toLowerCase()}`)
    const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${res.data.id}`)
    const jp = species.data.names.find(n => n.language.name === 'ja')
    const nameJp = jp ? jp.name : res.data.name

    store.addCard({
      pokemon: res.data,
      pokedexNumbers: species.data.pokedex_numbers,
      japaneseName: nameJp
    })
  } catch (e) {
    alert('ポケモンが見つかりません')
  } finally {
    loading.value = false
  }
}
</script>
