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
  
  ul {
    list-style: none;
    display: flex;
    border: 1px solid blueviolet;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px #888888;
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