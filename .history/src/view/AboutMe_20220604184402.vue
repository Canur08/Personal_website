<script lang="ts">
</script>

<template>
  <main>
    <div class="card">
      <div class="left">
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
    </div>
    <div class="card">
      <div class="right">abcde</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
}
* {
  // border: 1px solid green;
}
@media only screen and (min-width: 700px) {
  .card {
    text-align: center;
    // padding: 0 50px;
    width: 50%;
    min-width: 500px;
    // border: 1px solid greenyellow;
  }
  .left {
    // margin: 0 0 0 30%;
    width: 100%;
    background-color: rgb(136, 255, 175);
  }
  .right {
    // width: 500px;
    margin: 0 30% 0 0;
    background-color: aqua;
  }
}

@media only screen and (max-width: 700px) {
  .card {
    text-align: center;
    // padding: 0 50px;
    width: 50%;
    min-width: 700px;
    // border: 1px solid greenyellow;
  }
  .left {
    width: 800px;
    background-color: aqua;
  }
  // .right {
  //   box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
  //     5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
  //   width: 50%;
  //   min-width: 400px;
  // }
  // .imgHW {
  //   height: 300px;
  //   width: 300px;
  // }
  // .showSkills {
  //   width: 400px;
  //   margin: 40px 10% 0 30%;
  //   border-radius: 10px;
  //   box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
  //     5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
  // }
  // // * {
  // //   border: 1px solid greenyellow;
  // // }
  // .myInfo {
  //   width: 100%;
  //   display: flex;
  //   margin: 0 0 0 30%;
  //   .portrait {
  //     // width: 100%;
  //     // height: 300px;
  //     // max-width: 300px;
  //     // min-width: 300px;
  //     border-radius: 10px;
  //     box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
  //       5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
  //     // 使图片垂直居中
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;

  //     img {
  //       height: 90%;
  //       width: 90%;
  //       border-radius: 10px;
  //       // position: relative;
  //       // top: 0;
  //       // left: 0;
  //       // right: 0;
  //       // bottom: 0;
  //     }
  //   }
  //   .infoBox {
  //     width: 50%;
  //     padding: 0 0 0 10%;
  //     max-width: 300px;
  //     min-width: 200px;
  //     .infoName {
  //       height: 100px;
  //       border-radius: 10px;
  //       box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
  //         5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
  //     }
  //     .infoHobby {
  //       margin-top: 40px;
  //       height: 160px;
  //       border-radius: 10px;
  //       box-shadow: -5px -5px 5px 3px rgba($color: #ffffff, $alpha: 0.2),
  //         5px 5px 5px 3px rgba($color: #000000, $alpha: 0.2);
  //     }
  //   }
  // }
}
</style>