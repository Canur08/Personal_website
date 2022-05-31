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
        <div class="btn">
          <button>LinkStart</button>
        </div>
        <div>
          <div class="myInfo">
            <p>简短的自我介绍</p>
          </div>
        </div>
      </div>
    </div>

    <!-- /video/wlc2.mp4 -->
    <div class="cssBg" v-show="played">
      <div class="demo-cube">
        <ul class="cube">
          <li class="top"></li>
          <li class="bottom"></li>
          <li class="front"></li>
          <li class="back"></li>
          <li class="right"></li>
          <li class="left"></li>
        </ul>
      </div>
    </div>
    <video id="bgVideo" src="/video/wlc2.mp4" muted></video>
  </main>
</template>

<style lang="scss" scoped>
.demo-cube {
  margin: auto;
  perspective: 200px;
  transform: rotateX(10deg);
  ul {
    padding: 0;
    list-style: none;
  }
  position: relative;
  width: 100%;
  height: 200px;
  .cube {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
    transform-style: preserve-3d;
    transform-origin: 50px 50px;
    transform: rotateX(-33.5deg) rotateY(45deg);
    animation: slowspin 3s alternate ease-in-out infinite 5s;

    li {
      position: absolute;
      display: block;
      width: 100px;
      height: 100px;
      background: rgba(30, 255, 143, 0.5);
      border: 1px solid rgb(255, 255, 255);
      // border: 5px solid red;
    }
    .top {
      transform: rotateX(90deg) translateZ(50px);
    }
    .bottom {
      transform: rotateX(-90deg) translateZ(50px);
    }
    .front {
      transform: translateZ(50px);
    }
    .back {
      transform: rotateX(-180deg) translateZ(50px);
    }
    .left {
      transform: rotateY(-90deg) translateZ(50px);
    }
    .right {
      transform: rotateY(90deg) translateZ(50px);
    }
  }
}

@keyframes slowspin {
  0% {
    transform: rotateX(-33.5deg) rotateY(0deg);
  }
  40%,
  to {
    transform: rotateX(-33.5deg) rotateY(315deg);
  }
}
.cssBg {
  height: 300px;
  width: 300px;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-top: -150px;
  margin-left: -150px;
  // border: 1px solid white;
}
.myInfo {
  background-color: rgba($color: #8f8f8f, $alpha: 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid white;
  border-radius: 20px;
  margin-top: 30px;
}

button {
  color: black;
  background-color: rgba($color: #ffffff, $alpha: 0.3);
  border: 0px;
  height: 50px;
  width: 100px;
  border-radius: 50px;
  font-size: 1.2em;
}
button:hover {
  animation: btnIn 1s forwards;
  // border: 1px solid greenyellow;
}
@keyframes btnIn {
  0% {
    background-color: rgba($color: #ffffff, $alpha: 0.3);
    border: 1px solid rgb(233, 233, 233);
  }
  100% {
    background-color: rgba($color: #ffffff, $alpha: 1);
    border: 1px solid greenyellow;
  }
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
  // border: 1px solid white;
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
    background-color: rgba(255, 255, 255, 0.1);
  }
  5% {
    border-radius: 10px;
  }
  //   50%  {border-radius: 30px;}
  100% {
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 1);
  }
}
a:hover {
  // background-color: rgba(255, 255, 255, 0.8);
  border: 1px white;
  border-radius: 40px;
  color: black;
  // animation-name: example;
  // animation-duration: 1s;
  animation: example 1s forwards;
}
.meus {
  ul {
    color: white;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      padding: 0 20px;
    }
  }
}
main {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  //   max-height: 100vh;
  z-index: -5;
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
  // border: 1px solid rgb(0, 255, 13);
}
</style>