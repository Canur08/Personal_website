<script lang="ts">
</script>

<template>
  <main>
    <div class="card">
      <div class="portrait">
        <img class="portraitImg" src="../../public/img/头像.png" alt="" />
      </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 90%;
    width: 90%;
    border-radius: 10px;
    // position: relative;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
  }
  img:before {
          box-shadow: -2px -2px 7px 0px rgba($color: #ffffff, $alpha: 0.3) inset,
        2px 2px 7px 0px rgba($color: #000000, $alpha: 0.3) inset;
  }
}
</style>