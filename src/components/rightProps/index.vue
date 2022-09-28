<script setup lang="ts">
  import { useCompMap } from '@/stores/useCenter'

  import BaseComp from './components/base.vue'
  const store = useCompMap()
  // 获取选中的数据
  const activeMap = ref()
  const showCompBox = ref(false)
  provide('activeMap', activeMap)

  watch(
    () => store.activeIdx,
    () => {
      const value = store.getCurrentStyle()
      activeMap.value = value
      showCompBox.value = Boolean(value)
      console.log('showCompBox.value', showCompBox.value)
    }
  )
</script>

<template>
  <div class="rightProps-container">
    <CompBox v-model="showCompBox">
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
