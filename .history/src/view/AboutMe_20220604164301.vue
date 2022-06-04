<script lang="ts">
</script>

<template>
  <main>
    <div class="card">
      <div class="myInfo">
        <div class="portrait imgHW">
          <img class="portraitImg" src="/img/头像.png" alt="" />
        </div>
        <div class="infoBox">
          <div class="infoName">右上</div>
          <div class="infoHobby">右下</div>
        </div>
      </div>
      <div class="showSkills">下方</div>
    </div>
    <div class="card">ABCDEFG</div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  // flex-wrap: wrap;
  height: auto;
  width: 100%;
}
.card {
  text-align: center;
  // padding: 0 50px;
  width: 50%;
  // border: 1px solid greenyellow;
}
.imgHW {
  height: 300px;
  width: 300px;
}
.showSkills {
  margin: 40px 100px 0 100px;
  border-radius: 10px;
  box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
    5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
}
.myInfo {
  display: flex;
  padding: 0 0 0 30%;
    .portrait {
      // width: 100%;
      // height: 300px;

    border-radius: 10px;
    box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
      5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
    // 使图片垂直居中
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
  }
  .infoBox {
    width: 50%;
    padding: 0 0 0 100px;
    .infoName {
      height: 100px;
      border-radius: 10px;
      box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
        5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
    }
    .infoHobby {
      margin-top: 40px;
      height: 160px;
      border-radius: 10px;
      box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
        5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
    }
  }
}
</style>