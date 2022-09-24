<script setup lang="ts">
  import { useCansvs, useDrag } from './hooks'

  // 画布大小
  const { width, height } = useCansvs()

  // 拖放进画布
  const { compMap, handleDrop } = useDrag()
</script>

<template>
  <div
    class="center-container"
    @drop.prevent="handleDrop"
    @dragover.prevent
  >
    <img
      v-for="item in compMap"
      :key="item.id"
      :src="item.url"
      :style="item.style"
    />
  </div>
</template>

<style lang="scss" scoped>
  .center-container {
    width: v-bind(width);
    height: v-bind(height);
    background: #fff;
    img {
      position: absolute;
    }
  }
</style>
