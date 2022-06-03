<script setup lang="ts">
const navList: Array<string> = ['项目演示', '有感而发', '小技巧', 'e' , 'f']
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
nav {
  display: flex;
  justify-content: center;

}
ul {
  list-style: none;
}
li {
  // display: block;
  background-color: greenyellow;
  border: 1px solid blueviolet;
}
</style>