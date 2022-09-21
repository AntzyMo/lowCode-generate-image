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
  <Header />
  <div class="content">
    <LeftComponent />
    <draggable
      v-model="myArray"
      group="people"
      item-key="name"
      @start="drag = true"
      @end="drag = false"
    >
      <template #item="{ element }">
        <div>{{ element.name }}</div>
      </template>
    </draggable>
  </div>
</template>
<style lang="scss" scoped>
  .content {
    height: calc(100vh - 51px);
    display: flex;
    .box {
      flex: 1;
    }
  }
</style>
