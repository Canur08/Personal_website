<script setup lang="ts">
/* 
    Typescript 的目的是避免错误的类型。
    默认 document.getElementById返回 HTMLElement type 是泛型类型。
    需要加上HTMLCanvasElement
*/
// const c = <HTMLCanvasElement> document.getElementById('bgMain');

import { ref } from "vue";
import { useRouter} from 'vue-router'
const router = useRouter();

// const a: number = 1
let infoText = ref("欢迎访问我的个人网站，点击Link Start进入吧");
let played = ref(true);
function openVoice() {
  var videoPlayer = <HTMLAudioElement>document.getElementById("bgVideo");
  videoPlayer.muted = false;
  videoPlayer.play();
  played.value = false;
  console.log(played);
}
const arr: Array<string> = ["首页", "Bilibili", "Github"];
function inHead() {
  router.push('home')
}
</script>
 
<template>
  <header>
    <nav class="nav">
      <div class="logo">logo</div>
      <div class="meus">
        <ul>
          <li>
            <a href="">Bilibili</a>
          </li>
          <li>
            <a href="">GitHub</a>
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
          <button @click="inHead()">LinkStart</button>
        </div>
        <div class="myInfo">
          <p>{{ infoText }}</p>
        </div>
      </div>
    </div>

    <!-- 三维正方形 -->
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
    <video id="bgVideo" src="/video/甸影.mp4" muted></video>
  </main>
</template>

<style lang="scss" scoped>
* {
  color: white;
  // border: 1px solid rgb(0, 255, 13);
}

@media only screen and (max-width: 600px) {
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    // border: 1px solid white;

    .logo {
      padding: 0 0 0 20px;
      //   flex-grow: 2;
      //   background-image: url(../assets/播放.png);
    }
    .meus {
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        li {
          padding: 0 10px;
          a {
            // 取消链接的下划线
            text-decoration: none;
            // 设置为块级是为了鼠标移到li标签时能触发a标签
            display: block;
            height: 100%;
            width: 100%;
            // 文字居中
            text-align: center;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 600px) {
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    line-height: 80px;
    .logo {
      padding: 0 0 0 50px;
      //   flex-grow: 2;
      //   background-image: url(../assets/播放.png);
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
        }
      }
    }
  }
}
.nav {
  backdrop-filter: blur(10px);
}
.nav::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: blur(20px);
  z-index: -1;
  // margin: -30px;
}
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
    animation: slowspin 3s linear 0s infinite normal;

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
  100% {
    transform: rotateX(-33.5deg) rotateY(360deg);
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
  // background-color: rgba($color: #8f8f8f, $alpha: 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid white;
  border-radius: 20px;
  margin-top: 30px;
  height: 100px;
  p {
    padding: 30px 10% 0 10%;
  }
}
.myInfo::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: blur(30px);
  z-index: -2;
  margin: -30px;
}
.myInfo:hover {
  // transform: rotate(60deg);
  animation: info 1s alternate infinite;
  @keyframes info {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(2deg);
    }
    50% {
      transform: rotate(-2deg);
    }
    100% {
      // background-color: rgba($color: #8f8f8f, $alpha: 0.9);
      transform: rotate(0deg);
    }
  }
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

.introduce {
  width: 300px;
  height: auto;
  // line-height: 80px;
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
  top: 45%;
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
</style>