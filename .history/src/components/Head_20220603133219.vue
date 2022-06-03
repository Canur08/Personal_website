<script setup lang="ts">
const navList: Array<string> = ['a', 'b', 'd', 'e' , 'f']
</script>

<template>
<nav>
  <ul>
    <li v-for="item in navList" :key="item">
    {{ item }}
    </li>
  </ul>
</nav>  
</template>

<style lang="scss" scoped>
li {
  display: inline;
  background-color: greenyellow;
  border: 1px solid blueviolet;
}
</style>