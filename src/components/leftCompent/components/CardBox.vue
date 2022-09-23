<script setup lang="ts">
  interface propsType {
    title: string
  }
  defineProps<propsType>()
</script>

<template>
  <div class="card-box">
    <div class="title">{{ title }}</div>
    <div class="item-box">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card-box {
    color: #fff;
    font-size: 18px;
    margin: 18px;

    .title {
      margin-bottom: 20px;
    }
  }
</style>
