<script setup lang="ts">
  import ShapeBox from '../ShapeBox/index.vue'
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
    <ShapeBox
      v-for="item in compMap"
      :key="item.id"
      :item="item"
    >
      <img :src="item.url" />
    </ShapeBox>
  </div>
</template>

<style lang="scss" scoped>
  .center-container {
    width: v-bind(width);
    height: v-bind(height);
    background: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
