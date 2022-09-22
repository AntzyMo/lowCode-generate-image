<script setup lang="ts">
  interface imgMapType {
    url: string
    id: string
  }
  const imgMap = ref<imgMapType[]>([
    {
      url: 'https://avatars.githubusercontent.com/u/45410431?v=4',
      id: '1'
    },
    {
      url: 'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
      id: '2'
    }
  ])

  const handleDragStart = (e: DragEvent, item: imgMapType) => {
    console.log('e', e)
    e.dataTransfer?.setData('imgId', item.id)
  }
</script>

<template>
  <div class="leftComponents-container">
    <div class="image-box">
      <div
        v-for="item in imgMap"
        :key="item.id"
        class="box"
      >
        <img
          draggable
          :src="item.url"
          width="100"
          height="100"
          @dragstart="handleDragStart($event, item)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .leftComponents-container {
    width: 200px;
    border-right: 1px solid #000;
    height: 100%;
  }
</style>
