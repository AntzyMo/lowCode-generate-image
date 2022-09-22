<script setup lang="ts">
  const handleDrop = (e: DragEvent) => {
    console.log('e', e)
    const img = e.dataTransfer?.getData('imgId')
    console.log('img', img)
  }

  const handleDragOver = (e: DragEvent) => {
    // e.dataTransfer.dropEffect = 'copy'
  }
</script>

<template>
  <div
    class="center-container"
    @drop.prevent="handleDrop"
    @dragover.prevent="handleDragOver"
  ></div>
</template>

<style lang="scss" scoped>
  .center-container {
    width: 100%;
    height: 100%;
  }
</style>
