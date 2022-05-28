<script setup lang="ts">
/* 
    Typescript 的目的是避免错误的类型。
    默认 document.getElementById返回 HTMLElement type 是泛型类型。
    需要加上HTMLCanvasElement
*/
// const c = <HTMLCanvasElement> document.getElementById('bgMain');
// const a: number = 1
function openVoice() {
    var videoPlayer = <HTMLAudioElement> document.getElementById("bgVideo")
    videoPlayer.muted = false
    videoPlayer.play()
} 
</script>
 
<template>
    <header>header</header>
    <main>
        <button @click="openVoice()"></button>
        <video id="bgVideo" src="/video/wlc2.mp4" muted></video>
    </main>
    <footer>footer</footer>
</template>

<style lang="scss" scoped>
    $h_color: red;
    h1 {
        background-color: $h_color;    
    }
    button {
        position: relative;
        top: 50%;
    }
    main {
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: -10;
    }
    video {
        height: 100%;
        width: 100%;

    }
    ::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
</style>