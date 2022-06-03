<script setup lang="ts">
import Head from "./Head.vue";
</script>

<template>
  <main>
    <Head />
    <router-view name="path"></router-view>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #dddcdc;
  height: 100vh;
}
</style>