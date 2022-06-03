<script setup lang="ts">
const navList: Array<string> = ["项目演示", "有感而发", "小技巧", "e", "f"];
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
  margin-top: 50px;
  display: flex;
  justify-content: center;
  border: 1px solid blueviolet;
  ul {
    list-style: none;
    display: flex;

    li {
      // display: block;
      height: 50px;
      line-height: 50px;
      // background-color: greenyellow;
      // border: 1px solid blueviolet;
    }
  }
}
</style>