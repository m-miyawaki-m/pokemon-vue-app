<template>
  <v-container fluid class="pa-4">
    <SearchBar @search="fetchPokemon" @random="fetchRandomPokemon" />
    <v-checkbox
      v-model="showRegional"
      label="世代別図鑑番号を表示"
      class="my-4"
    />

    <v-row dense>
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

const fetchPokemon = async (input) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${String(input).toLowerCase()}`)
        pokemon.value = res.data

        const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${res.data.id}`)
        pokedexNumbers.value = species.data.pokedex_numbers

        // ✅ 日本語名を取得
        const jp = species.data.names.find(n => n.language.name === 'ja')
        japaneseName.value = jp ? jp.name : pokemon.value.name
    } catch (e) {
        alert('ポケモンが見つかりません')
        pokemon.value = null
        pokedexNumbers.value = []
        japaneseName.value = ''
    }
}


const fetchRandomPokemon = async () => {
  const id = Math.floor(Math.random() * 1025) + 1
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${res.data.id}`)

    const jp = species.data.names.find(n => n.language.name === 'ja')
    const nameJp = jp ? jp.name : res.data.name

    // 新しいカードを左端に追加
    cards.value.unshift({
      pokemon: res.data,
      pokedexNumbers: species.data.pokedex_numbers,
      japaneseName: nameJp
    })

    // カードが4枚を超えたら右端（最後）から削除
    if (cards.value.length > 4) {
      cards.value.pop()
    }

    console.log(`✅ 取得成功: ${nameJp}`)
  } catch (e) {
    console.error(`❌ 取得失敗: ID ${id}`, e)
    alert('ポケモンの取得に失敗しました')
  }
}



</script>
