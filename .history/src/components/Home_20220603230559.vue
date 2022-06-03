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
  background-color: #ececea;
  height: 100vh;
}
</style>