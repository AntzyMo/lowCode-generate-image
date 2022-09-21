<script setup lang="ts">
  import draggable from 'vuedraggable'
  const myArray = ref([
    {
      name: 'John',
      id: 1
    }
  ])
  const drag = ref(false)
</script>

<template>
  <aside class="left-container">
    <draggable
      v-model="myArray"
      :group="{ name: 'people', pull: 'clone', put: false }"
      item-key="name"
      @start="drag = true"
      @end="drag = false"
    >
      <template #item="{ element }">
        <div>{{ element.name }}</div>
      </template>
    </draggable>
  </aside>
</template>

<style lang="scss" scoped>
  .left-container {
    width: 200px;
    height: 100%;
    border-right: 1px solid #000;

    .text-box {
      padding: 5rpx;
      border: 1px solid #000;
    }
  }
</style>
