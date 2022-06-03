<script setup lang="ts">
const navList: Array<string> = ["项目演示", "有感而发", "小技巧", "e", "f"];
</script>

<template>
  <main>
    <nav>
      <ul>
        <li v-for="item in navList" :key="item">
          {{ item }}
        </li>
      </ul>
    </nav>
  </main>
</template>

<style lang="scss" scoped>
// 设置外阴影偏移大小值
$shadow-out: 3px;
$shadow-in: -3px;

main {
  background-color: #14bd8a;
  height: 100vh;
}
nav {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  ul {
    list-style: none;
    display: flex;
    // border: 1px solid blueviolet;
    border-radius: 10px;
    box-shadow: $shadow-out $shadow-out 5px 0px rgba($color: #000000, $alpha: 0.3), $shadow-in $shadow-in 5px 0px rgba($color: #ffffff, $alpha: 0.3);
    
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