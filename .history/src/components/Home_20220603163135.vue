<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import Head from '@/Head.vue'
export default defineComponent({
  name: 'ElementuiTest1',
  components: {
    Head
  },
})
</script>

<template>
<main>
  <Head />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #14bd8a;
  height: 100vh;
  
}
.Head {
  color: aliceblue;
}
</style>