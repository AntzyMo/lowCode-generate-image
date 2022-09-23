<script setup lang="ts">
  import CardBox from './components/CardBox.vue'
  import { useCategoryList } from './hooks'
  const { categoryList, cateoryItemClick } = useCategoryList()

  const isCloseComponentsBox = ref(false)
  const closeComponentBox = () => {
    isCloseComponentsBox.value = !isCloseComponentsBox.value
  }

  // const imgMap = ref<imgMapType[]>([
  //   {
  //     tag: 'img',
  //     style: {
  //       width: 100,
  //       height: 100,
  //       left: 0,
  //       top: 0
  //     },
  //     url: 'https://avatars.githubusercontent.com/u/45410431?v=4',
  //     id: '1'
  //   },
  //   {
  //     tag: 'img',
  //     style: {
  //       width: 100,
  //       height: 100,
  //       left: 0,
  //       top: 0
  //     },
  //     url: 'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
  //     id: '2'
  //   }
  // ])

  // const handleDragStart = (e: DragEvent, item: imgMapType) => {
  //   console.log(222)
  //   console.log(imgRef.value, 'v')

  //   console.log('e', e)
  //   e.dataTransfer?.setData('com', `img,${item.id}`)
  //   e.dataTransfer?.setDragImage(
  //     imgRef.value[0],
  //     item.style.left,
  //     item.style.top
  //   )
  //   console.log(item, 'item')
  // }

  // const handleBox = (e: MouseEvent, item: imgMapType) => {
  //   console.log(111)

  //   console.log('item1', item)
  //   console.log('e1', e)
  // }
</script>

<template>
  <div class="leftComponents-container">
    <div class="category-box">
      <div
        v-for="item in categoryList"
        :key="item.text"
        class="item"
        :class="{ itemActive: item.active }"
        @click="cateoryItemClick(item)"
      >
        <img :src="item.src" />
        <div class="text">{{ item.text }}</div>
      </div>
    </div>
    <div
      class="component-box"
      :class="{ closeComponent: isCloseComponentsBox }"
    >
      <CardBox title="图片">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
        >
          <el-icon><i-ep-Plus /></el-icon>
        </el-upload>
      </CardBox>
    </div>

    <div
      class="closeIcon"
      @click="closeComponentBox"
    >
      <el-icon
        color="#fff"
        :size="20"
        class="arrowIcon"
        :class="{ arrowIconAcitve: isCloseComponentsBox }"
      >
        <i-ep-ArrowLeft />
      </el-icon>
    </div>

    <!-- <div class="image-box">
      <div
        v-for="item in imgMap"
        :key="item.id"
        class="box"
        @mousedown="handleBox($event, item)"
      >
        <img
          ref="imgRef"
          draggable
          :src="item.url"
          width="100"
          height="100"
          @dragstart="handleDragStart($event, item)"
        />
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
  .leftComponents-container {
    position: fixed;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;

    .category-box {
      width: 81px;
      height: 735px;
      border-radius: 20px;
      background: #fff;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90px;
        border-bottom: 1px solid #9393932e;
        cursor: pointer;

        &:nth-child(1) {
          border-radius: 20px 20px 0 0;
          margin-top: -2px;
        }

        img {
          width: 32px;
          height: 32px;
          margin-bottom: 12px;
        }
        .text {
          font-size: 17px;
        }
      }

      .itemActive {
        background: #252627;
        color: #fff;
      }
    }

    .component-box {
      width: 334px;
      height: 90vh;
      background: #252627;
      border-radius: 20px;
      box-sizing: border-box;
      transition: width 0.5s;
      overflow: hidden;

      &:deep(.el-upload) {
        width: 100px;
        height: 100px;
        background: #252627;
      }
    }

    .closeComponent {
      width: 0;
    }

    .closeIcon {
      width: 25px;
      height: 182px;
      background: #252627;
      border-radius: 0 20px 20px 0;
      display: flex;
      align-items: center;
      cursor: pointer;

      .arrowIcon {
        transform: rotate(0);
        transition: transform 0.5s;
      }

      .arrowIconAcitve {
        transform: rotate(180deg);
      }
    }
  }
</style>
