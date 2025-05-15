<template>
  <v-app>
    <!-- ヘッダー -->
    <BaseHeader />

    <!-- サイドバー -->
    <Sidebar />

    <!-- メイン -->
    <v-main class="main-area">
      <div class="content-fixed-box">
        <v-sheet width="1200" height="800" color="grey-lighten-4" elevation="4">
          <router-view />
        </v-sheet>
      </div>
    </v-main>
  </v-app>
</template>


<script setup>
import BaseHeader from './components/common/BaseHeader.vue';
import Sidebar from './components/common/Sidebar.vue';
</script>


<style scoped>
.main-area {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

/* サイドバーの右上＝UI内の "固定座標" に配置 */
.content-fixed-box {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0;
  margin-left: 0;
  padding: 0;

  /* サイドバーとヘッダーを避けて配置 */
  transform: translate(250px, 64px);
  width: 1200px;
  height: 800px;
  z-index: 10;
}

</style>
