<script setup lang="ts">
  import CenterCom from '@/components/center/index.vue'
  import Header from '@/components/header/index.vue'
  import LeftComponent from '@/components/leftCompent/index.vue'
  import RightProps from '@/components/rightProps/index.vue'
</script>

<template>
  <div class="container">
    <Header />
    <main>
      <!-- 左侧组件列表 -->
      <section>
        <LeftComponent />
      </section>

      <!-- 中间画布 -->
      <section class="center">
        <CenterCom />
      </section>

      <!-- 右侧属性 -->
      <section class="right-box">
        <RightProps />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    background: #1e1e1e;

    main {
      display: flex;
      flex: 1;
      height: calc(100vh - 51px);

      .center {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      // .right-box {
      //   position: fixed;
      //   right: 0;
      //   top: 50%;
      //   transform: translateY(-50%);
      // }
    }
  }
</style>
