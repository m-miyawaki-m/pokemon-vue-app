<template>
  <v-container fluid class="pa-4">
    <SearchBar @search="fetchPokemon" @random="fetchRandomPokemon" />

    <v-checkbox
      v-model="showRegional"
      label="世代別図鑑番号を表示"
      class="my-4"
    />

    <!-- ✅ ローディング表示 -->
    <v-container v-if="loading" class="d-flex justify-center my-4">
      <v-progress-circular
        indeterminate
        color="primary"
        size="40"
      />
    </v-container>

    <!-- ✅ カード表示（ローディングでないとき） -->
    <v-row dense v-else>
      <v-col
        v-for="(card, index) in cards"
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
  </v-container>
</template>


<script setup>
import { ref } from 'vue'
import axios from 'axios'
import SearchBar from '../components/SearchBar.vue'
import PokemonCard from '../components/PokemonCard.vue'

const pokemon = ref(null)
const pokedexNumbers = ref([])
const showRegional = ref(false) // ✅ チェックボックス用

const japaneseName = ref('')
const cards = ref([])
const loading = ref(false) // ← ローディング状態

const fetchPokemon = async (input) => {
  loading.value = true
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${String(input).toLowerCase()}`)
    const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${res.data.id}`)
    const jp = species.data.names.find(n => n.language.name === 'ja')
    const nameJp = jp ? jp.name : res.data.name

    cards.value.unshift({
      pokemon: res.data,
      pokedexNumbers: species.data.pokedex_numbers,
      japaneseName: nameJp
    })

    if (cards.value.length > 4) {
      cards.value.pop()
    }
  } catch (e) {
    alert('ポケモンが見つかりません')
  } finally {
    loading.value = false
  }
}

const fetchRandomPokemon = async () => {
  const id = Math.floor(Math.random() * 1010) + 1
  loading.value = true
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${res.data.id}`)
    const jp = species.data.names.find(n => n.language.name === 'ja')
    const nameJp = jp ? jp.name : res.data.name

    cards.value.unshift({
      pokemon: res.data,
      pokedexNumbers: species.data.pokedex_numbers,
      japaneseName: nameJp
    })

    if (cards.value.length > 4) {
      cards.value.pop()
    }
  } catch (e) {
    alert('ポケモンの取得に失敗しました')
  } finally {
    loading.value = false
  }
}


</script>
