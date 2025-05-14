<template>
  <v-container fluid class="pa-4">
    <RandomSearchBar @random="fetchRandomPokemon" />
    <!-- ✅ ローディング表示 -->
    <v-container v-if="loading" class="d-flex justify-center my-4">
      <v-progress-circular indeterminate color="primary" size="40" />
    </v-container>

    <!-- ✅ 戻ってきたら再表示される -->
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
import RandomSearchBar from '../components/RandomSearchBar.vue'
import { usePokemonStore } from '../stores/useRandomStore'

const store = usePokemonStore()
const showRegional = ref(false)
const loading = ref(false)

const fetchRandomPokemon = async () => {
  const id = Math.floor(Math.random() * 1010) + 1
  loading.value = true
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${res.data.id}`)
    const jp = species.data.names.find(n => n.language.name === 'ja')
    const nameJp = jp ? jp.name : res.data.name

    store.addCard({
      pokemon: res.data,
      pokedexNumbers: species.data.pokedex_numbers,
      japaneseName: nameJp
    })
  } catch (e) {
    alert('ポケモンの取得に失敗しました')
  } finally {
    loading.value = false
  }
}
</script>
