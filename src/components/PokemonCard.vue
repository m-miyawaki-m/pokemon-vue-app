<template>
  <v-container fluid class="pa-0 d-flex justify-start">
    <v-card class="mt-4 pa-4" style="width: 320px;">
      <v-card-title class="text-h5">
        {{ japaneseName || pokemon.name.toUpperCase() }}
      </v-card-title>

      <v-img :src="pokemon.sprites.other['official-artwork'].front_default" height="200px" />

      <v-card-text>
        <div><strong>全国図鑑番号:</strong> {{ pokemon.id }}</div>




        <v-list>
          <v-list-item v-for="stat in pokemon.stats" :key="stat.stat.name">
            <v-row no-gutters class="w-100 align-center">
              <v-col cols="6" class="text-left" style="width: 120px; max-width: 120px;">
                {{ statLabelMap[stat.stat.name] || stat.stat.name.toUpperCase() }}
              </v-col>
              <v-col cols="6" class="text-left" style="width: 60px; max-width: 60px;">
                {{ stat.base_stat }}
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>

        <v-divider class="my-2" />

        <div v-if="showRegional && pokedexNumbers.length">
          <strong>世代別図鑑番号:</strong>
          <v-list dense>
            <v-list-item v-for="entry in pokedexNumbers" :key="entry.pokedex.name">
              <v-list-item-title>
                {{ regionName(entry.pokedex.name) }}図鑑: No.{{ entry.entry_number }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script setup>
const props = defineProps({
  pokemon: Object,
  pokedexNumbers: {
    type: Array,
    default: () => [],
  },
  showRegional: {
    type: Boolean,
    default: true,
  },
  japaneseName: {
    type: String,
    default: '',
  }
})

const regionMap = {
  "kanto": "カントー",
  "original-johto": "ジョウト",
  "hoenn": "ホウエン",
  "sinnoh": "シンオウ",
  "unova": "イッシュ",
  "kalos-central": "カロス（中央）",
  "galar": "ガラル",
  "paldea": "パルデア",
}

const statLabelMap = {
  hp: 'HP',
  attack: 'こうげき',
  defense: 'ぼうぎょ',
  'special-attack': 'とくこう',
  'special-defense': 'とくぼう',
  speed: 'すばやさ',
}


const regionName = (key) => regionMap[key] || key
</script>
