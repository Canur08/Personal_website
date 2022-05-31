<script setup lang="ts">
/* 
    Typescript 的目的是避免错误的类型。
    默认 document.getElementById返回 HTMLElement type 是泛型类型。
    需要加上HTMLCanvasElement
*/
// const c = <HTMLCanvasElement> document.getElementById('bgMain');

import { ref } from "vue";

// const a: number = 1
let played = ref(true);
function openVoice() {
  var videoPlayer = <HTMLAudioElement>document.getElementById("bgVideo");
  videoPlayer.muted = false;
  videoPlayer.play();
  played.value = false;
  console.log(played);
}
const arr: Array<string> = ["首页", "Bilibili", "Github"];
</script>
 
<template>
  <header>
    <nav class="nav">
      <div class="logo">logo</div>
      <div class="meus">
        <ul>
          <li v-for="item in arr" :key="item">
            <a href="">{{ item }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <!-- <button @click="openVoice()">按钮</button> -->
    <div class="inPlay" @click="openVoice()" v-show="played"></div>
    <div class="introduce">
      <div class="my">
        <div>
          <button class="btn">LinkStart</button>
        </div>
        <div>
          <div>
            <p>简短的自我介绍</p>
          </div>
        </div>
      </div>
    </div>

    <!-- /video/wlc2.mp4 -->
    <video id="bgVideo" src="/video/wlc2.mp4" muted></video>
  </main>
</template>

<style lang="scss" scoped>
$h_color: red;
.btn {
  color: black;
}
.myd {
  width: 300px;
  height: 80px;
  line-height: 80px;
  // 居中
  position: absolute;
  top: 70%;
  left: 50%;
  margin-top: -40px;
  margin-left: -150px;

  z-index: 2;
  mix-blend-mode: white;
  text-align: center;
  background-color: rgba($color: #8f8f8f, $alpha: 0.6);
  backdrop-filter: blur(10px);
  // filter: drop-shadow(16px 16px 20px red) invert(75%);
  border: 1px solid white;
  border-radius: 20px;
  // color: black;
}
.introduce {
  width: 300px;
  height: auto;
  line-height: 80px;
  // 居中
  position: absolute;
  top: 60%;
  left: 50%;
  margin-top: -40px;
  margin-left: -150px;
  z-index: 2;
  border: 1px solid white;
  text-align: center;
  // color: black;
}
.inPlay {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -40px;
  margin-left: -40px;
  z-index: 1;
  //   background-color: aqua;
  background-image: url(../assets/播放-白.png);
  object-fit: cover;
  background-size: cover;
  mix-blend-mode: white;
}
.meus {
  // flex-grow: 2;
}
.logo {
  padding: 0 0 0 50px;
  //   flex-grow: 2;
  //   background-image: url(../assets/播放.png);
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  line-height: 80px;
}
a {
  // 取消链接的下划线
  text-decoration: none;
  // 设置为块级是为了鼠标移到li标签时能触发a标签
  display: block;
  height: 100%;
  width: 100px;
  // 文字居中
  text-align: center;
}
/* 动画代码 */
@keyframes example {
  0% {
    border-radius: 20px;
  }
  5% {
    border-radius: 10px;
  }
  //   50%  {border-radius: 30px;}
  100% {
    border-radius: 40px;
  }
}
a:hover {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px white;
  border-radius: 40px;
  color: black;
  animation-name: example;
  animation-duration: 1s;
}
ul {
  color: white;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
li {
  padding: 0 20px;
}
h1 {
  background-color: $h_color;
}
main {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  //   max-height: 100vh;
  z-index: -1;
  //   background-color: red;
}
video {
  height: 100%;
  width: 100%;
  // 设置为block可以把底下白边去掉
  display: block;
  // 设置视频全屏占比，且比例不变
  object-fit: cover;
  background-color: burlywood;
}
* {
  color: white;
  border: 1px solid rgb(0, 255, 13);
}
</style>