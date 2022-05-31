<script setup lang="ts">
</script>

<template>
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
</template>


<style lang="scss" scoped>
.demo-cube {
  margin: auto;
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
    animation: slowspin 1s ease-in-out infinite 2s;

    li {
      position: absolute;
      display: block;
      width: 100px;
      height: 100px;
      background: rgba(141, 214, 249, 0.5);
      border: 1px solid #fff;
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
  @keyframes slowspin {
  0% {
    transform: rotateX(-33.5deg) rotateY(0deg);
  }
  40%,
  to {
    transform: rotateX(-33.5deg) rotateY(315deg);
  }
}
}


</style>