<script setup lang="ts">
/* 
    Typescript 的目的是避免错误的类型。
    默认 document.getElementById返回 HTMLElement type 是泛型类型。
    需要加上HTMLCanvasElement
*/
// const c = <HTMLCanvasElement> document.getElementById('bgMain');
// const a: number = 1
function openVoice() {
  var videoPlayer = <HTMLAudioElement>document.getElementById("bgVideo");
  videoPlayer.muted = false;
  videoPlayer.play();
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
    <div class="inPlay" @click="openVoice()"></div>
    <!-- /video/wlc2.mp4 -->
    <video id="bgVideo" src="/video/wlc2.mp4" muted></video>
  </main>
</template>

<style lang="scss" scoped>
$h_color: red;
.inPlay {
    width: 80px;
    height: 80px;
      position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
//   background-color: aqua;
  background-image: url(../assets/播放.png);
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
  width: 100%;
  align-items: center;
}
a:hover {
  background-color: aqua;
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
button {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
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
}
</style>