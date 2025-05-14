<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import PokemonCard from '../components/PokemonCard.vue'; // ✅ ここを追加！
import { usePokemonListStore } from '../stores/usePokemonListStore';
const store = usePokemonListStore()
const loading = ref(false)
const currentPage = ref(1)
const pageSize = 25
const selectedPokemon = ref(null)
const pokemonDetail = ref(null)

const paginated = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return store.allPokemon.slice(start, start + pageSize)
})

async function fetchAllPokemonList() {
  loading.value = true
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000')
    store.setAllPokemon(res.data.results)
  } catch (e) {
    console.error('取得失敗:', e)
  } finally {
    loading.value = false
  }
}

async function fetchPokemonDetail(name) {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${res.data.id}`)
    const jp = species.data.names.find(n => n.language.name === 'ja')
    const nameJp = jp ? jp.name : res.data.name

    pokemonDetail.value = {
      pokemon: res.data,
      pokedexNumbers: species.data.pokedex_numbers,
      japaneseName: nameJp
    }
  } catch (e) {
    alert('ポケモンの取得に失敗しました')
    pokemonDetail.value = null
  }
}

onMounted(() => {
  if (store.allPokemon.length === 0) {
    fetchAllPokemonList()
  }
})

</script>

<template>
<v-container fluid class="pa-4 fill-height">

<v-row dense class="fill-height">

      <!-- 左カラム：一覧 -->
<v-col cols="6" class="fill-height" style="overflow-y: auto;">

<!-- テーブル全体のラッパー -->
<div style="display: flex; flex-direction: column; height: 100%;">
  <!-- ヘッダー固定 -->
  <v-table density="compact">
    <thead>
      <tr>
        <th style="position: sticky; top: 0; background: white; z-index: 1;">#</th>
        <th style="position: sticky; top: 0; background: white; z-index: 1;">英語名</th>
      </tr>
    </thead>
  </v-table>

  <!-- スクロール可能な tbody -->
  <div style="overflow-y: auto; flex: 1; max-height: 600px;">
    <v-table density="compact">
      <tbody>
        <tr
          v-for="(pokemon, index) in paginated"
          :key="pokemon.name"
          @click="fetchPokemonDetail(pokemon.name)"
          style="cursor: pointer;"
        >
          <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
          <td>{{ pokemon.name }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>

  <!-- フッター固定（ページネーション） -->
  <div class="mt-2">
    <v-pagination
      v-model="currentPage"
      :length="Math.ceil(store.allPokemon.length / pageSize)"
      total-visible="7"
    />
  </div>
</div>

      </v-col>

      <!-- 右カラム：カード -->
<v-col cols="6" class="fill-height" style="overflow-y: auto;">

        <PokemonCard
          v-if="pokemonDetail"
          :pokemon="pokemonDetail.pokemon"
          :pokedex-numbers="pokemonDetail.pokedexNumbers"
          :japanese-name="pokemonDetail.japaneseName"
          :show-regional="false"
        />
        <v-alert v-else type="info" class="mt-4">ポケモンを選択してください</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
