<script setup lang="ts">

</script>

<template>
<ul class="cube">
  <li class="top"></li>
  <li class="bottom"></li>
  <li class="front"></li>
  <li class="back"></li>
  <li class="right"></li>
  <li class="left"></li>
</ul>
</template>


<style lang="scss" scoped>
.cube {
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    transform-origin: 50px 50px;
    transform: rotateX(-33.5deg) rotateY(45deg);

    li {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 100px;
      background: rgba(141, 214, 249);
      border: 1px solid #fff;
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
</style>