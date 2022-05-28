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
const arr: Array<string> = ["主页", "B站"];
</script>
 
<template>
  <header>
    <nav>
      <ul v-for="item in arr" :key="item">
        <li>{{ item }}</li>
      </ul>
    </nav>
  </header>
  <main>
    <button @click="openVoice()">按钮</button>
    <video id="bgVideo" src="/video/wlc2.mp4" muted></video>
  </main>
</template>

<style lang="scss" scoped>
$h_color: red;
ul {
  color: white;
  list-style-type: none;
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
  display:block;
  // 设置视频全屏占比，且比例不变
  object-fit: cover;
}
</style>