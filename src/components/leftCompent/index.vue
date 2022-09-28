<script setup lang="ts">
  import { useCategoryList, useComponent } from './hooks'

  // 最左侧分类
  const { categoryList, cateoryItemClick, showCompBox } = useCategoryList()

  // 点击之后的组件库
  const { compMap, handleDragStart, clickBox } = useComponent()
</script>

<template>
  <div class="leftComponents-container">
    <!-- 左侧类目 -->
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

    <!-- 组件库 -->
    <CompBox
      v-model="showCompBox"
      arrow-loc="right"
    >
      <CardBox title="图片">
        <div class="image-box">
          <div
            v-for="item in compMap"
            :key="item.id"
            class="box"
            @mousedown="clickBox"
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
          <!-- <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
          >
            <el-icon><i-ep-Plus /></el-icon>
          </el-upload> -->
        </div>
      </CardBox>
    </CompBox>
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

    &:deep(.el-upload) {
      width: 100px;
      height: 100px;
      background: #252627;
    }

    .image-box {
      display: flex;
      flex-wrap: wrap;

      .box {
        margin-right: 24px;
        margin-bottom: 15px;
        cursor: grab;

        &:active {
          cursor: grabbing;
        }

        &:nth-child(2) {
          margin-right: 0;
        }
      }
    }
  }
</style>
