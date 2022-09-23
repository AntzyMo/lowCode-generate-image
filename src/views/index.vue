<script setup lang="ts">
  import CenterCom from '@/components/center/index.vue'
  import Header from '@/components/header/index.vue'
  import LeftComponent from '@/components/leftCompent/index.vue'
</script>

<template>
  <div class="container">
    <Header />
    <main>
      <!-- 左侧组件列表 -->
      <section class="left">
        <LeftComponent />
      </section>

      <!-- 中间画布 -->
      <!-- <section class="center">
        <CenterCom />
      </section> -->
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    background: #1e1e1e;
    cursor: url('@/assets/mouse.png') 4 12, auto;

    main {
      display: flex;
      flex: 1;
      height: calc(100vh - 51px);

      .center {
        width: calc(100vw - 200px);
      }
    }
  }
</style>
