<script setup lang="ts">
  import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

  import Vue3DraggableResizable from 'vue3-draggable-resizable'

  import { useCompMap } from '@/stores/useCenter'

  import { useCansvs, useDrag } from './hooks'
  // 画布大小
  const { width, height } = useCansvs()

  // 拖放进画布
  const { compMap, handleDrop } = useDrag()

  const store = useCompMap()
  const onActive = (index: number) => {
    store.activeIdx = index
  }
</script>

<template>
  <div
    id="center"
    class="center-container"
    @drop.prevent="handleDrop"
    @dragover.prevent
  >
    <Vue3DraggableResizable
      v-for="(item, index) in compMap"
      :key="item.id"
      v-model:x="item.style.left"
      v-model:y="item.style.top"
      v-model:w="item.style.width"
      v-model:h="item.style.height"
      :init-w="item.style.width"
      :init-h="item.style.height"
      class-name-draggable="draggable"
      class-name-dragging="dragging"
      @activated="onActive(index)"
    >
      <img :src="item.url" />
    </Vue3DraggableResizable>
  </div>
</template>

<style lang="scss" scoped>
  .center-container {
    width: v-bind(width);
    height: v-bind(height);
    background: #fff;

    &:deep(.active) {
      border: 2px solid #8b3dff;
    }
    &:deep(.vdr-container) {
      .vdr-handle,
      .vdr-handle-ml {
        border-radius: 50%;
        pointer-events: auto;
        position: absolute;
        background: #fff;
        box-shadow: 0 0 4px 1px rgb(57 76 96 / 15%),
          0 0 0 1px rgb(47 64 80 / 25%);
        transition: background 0.1s linear;

        &:hover {
          background: #8b3dff;
        }
      }

      .vdr-handle {
        width: 16px;
        height: 16px;
      }

      .vdr-handle-ml,
      .vdr-handle-mr {
        border-radius: 3px;
        width: 6px;
        height: 18px;
      }

      .vdr-handle-tm,
      .vdr-handle-bm {
        border-radius: 3px;
        height: 6px;
        width: 18px;
        transform: translateX(-50%);
      }

      .vdr-handle-tl {
        left: -8px;
        top: -8px;
        cursor: nw-resize;
      }

      .vdr-handle-tr {
        right: -6px;
        top: -8px;
        cursor: ne-resize;
      }

      .vdr-handle-bl {
        left: -8px;
        bottom: -7px;
        cursor: sw-resize;
      }
      .vdr-handle-br {
        right: -6px;
        bottom: -7px;
        cursor: se-resize;
      }

      .vdr-handle-ml {
        left: -4px;
        top: 50%;
        transform: translateY(-50%);
        cursor: w-resize;
      }

      .vdr-handle-mr {
        right: -4px;
        top: 50%;
        transform: translateY(-50%);
        cursor: w-resize;
      }
    }

    .draggable {
      cursor: grab;
    }
    .dragging {
      cursor: grabbing;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
</style>
