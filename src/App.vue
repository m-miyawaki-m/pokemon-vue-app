<template>
  <v-app>
    <BaseHeader />
    <Sidebar />
    <v-main>
      <v-container fluid class="pa-2 d-flex align-start">
        <v-sheet height="800" width="1200" color="grey-lighten-4">
          <router-view />
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
import BaseHeader from './components/common/BaseHeader.vue';
import Sidebar from './components/common/Sidebar.vue';
</script>


<style>
/* App.vue またはグローバルCSSに */
/* .fixed-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #f9f9f9;
} */

</style>