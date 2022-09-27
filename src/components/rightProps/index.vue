<script setup lang="ts">
  import { useCompMap } from '@/stores/useCenter'

  import BaseComp from './components/base.vue'
  const store = useCompMap()

  // 获取选中的数据
  const activeMap = ref()
  provide('activeMap', activeMap)

  watch(
    () => store.activeIdx,
    () => {
      activeMap.value = store.getCurrentStyle()
    }
  )
</script>

<template>
  <div class="rightProps-container">
    <CompBox>
      <BaseComp />
    </CompBox>
  </div>
</template>

<style lang="scss" scoped>
  .rightProps-container {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
