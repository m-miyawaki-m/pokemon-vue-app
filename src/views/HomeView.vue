<template>
  <v-container class="pa-4" style="height: 100px;" fluid>
    <v-card elevation="2" class="pa-4 d-flex align-center"
      style="width: 100%; height: 100%; justify-content: flex-end;">
      <v-btn class="ml-2" color="primary" @click="fetchTwoRandomPokemon">ボタン1</v-btn>
      <v-btn class="ml-2" color="secondary">ボタン2</v-btn>
      <v-btn class="ml-2" color="success">ボタン3</v-btn>
      <v-btn class="ml-2" color="error">ボタン4</v-btn>
    </v-card>
  </v-container>

  <v-container class="pa-4" fluid>
    <div class="masonry">
      <div class="masonry-item">
        <v-card class="pa-4" style="height: auto">
          <template v-if="showCard1 && pokemonCard1">
            <v-card-title>
              {{ pokemonCard1.name.toUpperCase() }}
              <v-spacer />
              <v-btn icon @click="showCard1 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-img :src="pokemonCard1.sprites.front_default" height="100" />
              <div>ID: {{ pokemonCard1.id }}</div>
            </v-card-text>
          </template>
          <template v-else>
            <v-card-title>箱①</v-card-title>
            <v-card-text>コンテンツ</v-card-text>
          </template>
        </v-card>
      </div>

      <div class="masonry-item">
        <v-card class="pa-4" style="height: 400px">
          <template v-if="showCard2 && pokemonCard2">
            <v-card-title>
              {{ pokemonCard2.name.toUpperCase() }}
              <v-spacer />
              <v-btn icon @click="showCard2 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-img :src="pokemonCard2.sprites.front_default" height="100" />
              <div>ID: {{ pokemonCard2.id }}</div>
            </v-card-text>
          </template>
          <template v-else>
            <v-card-title>箱②</v-card-title>
            <v-card-text>コンテンツ</v-card-text>
          </template>
        </v-card>
      </div>


      <div class="masonry-item">
        <v-card class="pa-4" style="height: 150px">
          <v-card-title>箱③</v-card-title>
          <v-card-text>コンテンツ</v-card-text>
        </v-card>
      </div>

      <div class="masonry-item">
        <v-card class="pa-4" style="height: 240px">
          <v-card-title>箱④</v-card-title>
          <v-card-text>コンテンツ</v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { VBtn, VCard, VCardText, VCardTitle } from 'vuetify/components'

const showCard1 = ref(false)
const showCard2 = ref(false)

const pokemonCard1 = ref(null)
const pokemonCard2 = ref(null)

async function fetchTwoRandomPokemon() {
  const id1 = Math.floor(Math.random() * 1010) + 1
  const id2 = Math.floor(Math.random() * 1010) + 1

  const res1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id1}`)
  const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id2}`)

  pokemonCard1.value = res1.data
  pokemonCard2.value = res2.data
  showCard1.value = true
  showCard2.value = true
}
</script>

<style scoped>
.masonry {
  column-count: 2;
  column-gap: 16px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
}
</style>
