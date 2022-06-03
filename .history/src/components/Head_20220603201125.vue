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
@media screen and (max-width: 500px) {
  nav {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    ul {
      // height: 60px;
      text-align: center;
      list-style: none;
      display: flex;
      // flex-direction: rev;
      flex-wrap: wrap;
      // border: 1px solid blueviolet;
      border-radius: 10px;
      box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
        5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);

      li {
        margin: 5px 10px;
        height: 50px;
        width: 100px;
        // padding: 5px 10px;
        line-height: 50px;

        // background-color: greenyellow;
        // border: 1px solid blueviolet;
        // box-shadow: -5px -5px 7px 0px rgba($color: #ffffff, $alpha: 0.3),
        //   5px 5px 7px 0px rgba($color: #000000, $alpha: 0.3);
      }
    }
    li:hover {
      // font-size: 0.9rem;
      border-radius: 20px;
      box-shadow: -2px -2px 7px 0px rgba($color: #ffffff, $alpha: 0.3) inset,
        2px 2px 7px 0px rgba($color: #000000, $alpha: 0.3) inset;
      animation: ft 0.2s ease-out forwards;
    }
    @keyframes ft {
      0% {
        font-size: 1rem;
        border-radius: 10px;
      }
      100% {
        font-size: 0.9rem;
        border-radius: 20px;
      }
    }
  }
}
@media screen and (min-width: 600px) {
  nav {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    ul {
      // height: 60px;
      text-align: center;
      list-style: none;
      display: flex;
      // flex-direction: rev;
      flex-wrap: wrap;
      // border: 1px solid blueviolet;
      border-radius: 10px;
      box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
        5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);

      li {
        margin: 5px 10px;
        height: 50px;
        width: 100px;
        // padding: 5px 10px;
        line-height: 50px;

        // background-color: greenyellow;
        // border: 1px solid blueviolet;
        // box-shadow: -5px -5px 7px 0px rgba($color: #ffffff, $alpha: 0.3),
        //   5px 5px 7px 0px rgba($color: #000000, $alpha: 0.3);
      }
    }
    li:hover {
      // font-size: 0.9rem;
      border-radius: 20px;
      box-shadow: -2px -2px 7px 0px rgba($color: #ffffff, $alpha: 0.3) inset,
        2px 2px 7px 0px rgba($color: #000000, $alpha: 0.3) inset;
      animation: ft 0.2s ease-out forwards;
    }
    @keyframes ft {
      0% {
        font-size: 1rem;
        border-radius: 10px;
      }
      100% {
        font-size: 0.9rem;
        border-radius: 20px;
      }
    }
  }
}
</style>