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
main {
  background-color: #14bd8a;
  height: 100vh;
}
nav {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  ul {
    height: 60px;
    list-style: none;
    display: flex;
    // border: 1px solid blueviolet;
    border-radius: 10px;
    box-shadow: -5px -5px 7px 0px rgba($color: #ffffff, $alpha: 0.3),
      5px 5px 7px 0px rgba($color: #000000, $alpha: 0.3);

    li {
      // display: block;
      
      height: 50px;
      width: 100px;
      padding: 0 10px;
      line-height: 50px;
      text-align: center;
      // background-color: greenyellow;
      // border: 1px solid blueviolet;
      // box-shadow: -5px -5px 7px 0px rgba($color: #ffffff, $alpha: 0.3),
      //   5px 5px 7px 0px rgba($color: #000000, $alpha: 0.3);
    }
  }
  li:hover {
    // font-size: 0.9rem;
    border-radius: 10px;
    box-shadow: -5px -5px 7px 0px rgba($color: #ffffff, $alpha: 0.3) inset,
      5px 5px 7px 0px rgba($color: #000000, $alpha: 0.3) inset;
    animation: ft .2s forwards;
  }
  @keyframes ft {
    0% {
      font-size: 1rem;
    }
    100% {
      font-size: 0.9rem;
    }
  }
}
</style>