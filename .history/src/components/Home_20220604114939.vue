<script setup lang="ts">
import Head from "./Head.vue";
</script>

<template>
  <main>
    <Head />
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
main {
  // 莫兰迪色   灰色
  background-color: #ececea;
  height: 100vh;
}
// .router-view {
//   display: flex;
//   justify-content: center;
// }
</style>