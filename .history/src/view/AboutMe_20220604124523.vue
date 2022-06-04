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
  

  text-align: center;
  margin: 0 50px;
}
.portrait {
  height: 300px;
  width: 300px;
  border-radius: 10px;
  box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
    5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
  text-align: center;
  img {
    height: 90%;
  width: 90%;
  border-radius: 10px;

  }
}
</style>