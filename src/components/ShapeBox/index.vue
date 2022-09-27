<script setup lang="ts">
  import { useCompMap } from '@/stores/useCenter'
  import type { compMapType, styleType } from '@/types/component'
  interface props {
    item: compMapType
  }
  defineProps<props>()

  const curStyle = ref<styleType>()
  const { getCurrentStyle } = useCompMap()
  curStyle.value = getCurrentStyle()

  const onMouseDown = ({ x, y }: MouseEvent) => {
    const XY = { x, y }

    const onMouseMove = (e: MouseEvent) => {
      const { x: moveX, y: moveY } = e

      const value = x - moveX
      console.log('value', value)
      curStyle.value.width = curStyle.value.width + e.clientX - XY.x
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }
</script>

<template>
  <div
    class="shapeBox"
    :style="{
      width: item.style.width + 'px',
      height: item.style.height + 'px',
      left: item.style.left + 'px',
      top: item.style.top + 'px'
    }"
  >
    <!-- 圆形 -->
    <i class="circle leftTop" />
    <i class="circle rightTop" />
    <i class="circle leftBottom" />
    <i class="circle rightBottom" />

    <!-- 矩形 -->
    <i
      class="ellipse leftCenter"
      @mousedown.stop.prevent="onMouseDown"
    />
    <i class="ellipse rightCenter" />

    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .shapeBox {
    border: 2px solid #8b3dff;
    position: absolute;
  }

  .circle,
  .ellipse {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    pointer-events: auto;
    position: absolute;
    background: #fff;
    box-shadow: 0 0 4px 1px rgb(57 76 96 / 15%), 0 0 0 1px rgb(47 64 80 / 25%);
    transition: background 0.1s linear;

    &:hover {
      background: #8b3dff;
    }
  }

  .leftTop {
    left: -8px;
    top: -8px;
    cursor: nwse-resize;
    transform: translateX(-2px);
  }

  .rightTop {
    right: -6px;
    top: -8px;
    cursor: nesw-resize;
  }
  .leftBottom {
    left: -8px;
    bottom: -7px;
    cursor: nesw-resize;
  }

  .rightBottom {
    right: -6px;
    bottom: -7px;
    cursor: nwse-resize;
  }

  .ellipse {
    border-radius: 3px;
    width: 6px;
    height: 18px;
  }
  .leftCenter {
    left: -4px;
    top: 50%;
    transform: translateY(-50%);
    cursor: ew-resize;
  }
  .rightCenter {
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    cursor: ew-resize;
  }
</style>
