<script setup lang="ts">
/* 
    Typescript 的目的是避免错误的类型。
    默认 document.getElementById返回 HTMLElement type 是泛型类型。
    需要加上HTMLCanvasElement
*/
// const c = <HTMLCanvasElement> document.getElementById('bgMain');
// const a: number = 1

</script>
 
<template>
    <header>header</header>
    <main>
        <video src="/video/wlc2.mp4" autoplay></video>
    </main>
    <footer>footer</footer>
</template>

<style lang="scss" scoped>
    $h_color: red;
    h1 {
        background-color: $h_color;    
    }
</style>