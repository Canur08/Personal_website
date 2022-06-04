<script lang="ts">
</script>

<template>
  <main>
    <div class="card">
      <div class="portrait"><img class="portraitImg" src="../../public/img/头像.png" alt=""></div>
    </div>
    <div class="card">ABCDEFG</div>
    <div class="card">ABCDEFG</div>
    <div class="card">ABCDEFG</div>
    <div class="card">ABCDEFG</div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
}
.card {
  border-radius: 10px;
  box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
    5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
  height: 300px;
  text-align: center;
  margin: 0 50px;
}
.portrait {
  height: 50%;
  width: 50%;
  img {
    height: 100%;
  width: 100%;
  }
}
</style>