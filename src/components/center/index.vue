<script setup lang="ts">
  const arr = [
    {
      tag: 'img',
      style: {
        width: '100px',
        height: '100px',
        left: 0,
        top: 0
      },
      url: 'https://avatars.githubusercontent.com/u/45410431?v=4',
      id: '1'
    },
    {
      tag: 'img',
      style: {
        width: '100px',
        height: '100px',
        left: 0,
        top: 0
      },
      url: 'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
      id: '2'
    }
  ]
  interface imgMapType {
    url: string
    id: string
    tag: string
    style: {
      width: number | string
      height: number | string
      left: number | string
      top: number | string
    }
  }
  const imgMap = ref<imgMapType[]>([])
  const handleDrop = (e: DragEvent) => {
    console.log('e', e)
    const [tag, id] = e.dataTransfer?.getData('com').split(',')
    const imgitem = arr.find(item => item.id == id)!
    console.log('img', imgitem)

    imgitem.style.left = `${e.x}px`
    imgitem.style.top = `${e.y}px`
    imgMap.value.push(imgitem)
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
  >
    <div class="edior">
      <!-- <img
        v-for="item in imgMap"
        :key="item.id"
        :src="item.url"
        :style="item.style"
      /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .center-container {
    width: 100%;
    height: 100%;
    // background: #000;

    .edior {
      margin: 20px;
      height: 100%;
      // background: #fff;
      position: relative;

      img {
        position: absolute;
      }
    }
  }
</style>
