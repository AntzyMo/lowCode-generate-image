<script setup lang="ts">
  interface props {
    arrowLoc?: 'left' | 'right'
    modelValue: boolean
  }
  const { arrowLoc = 'left', modelValue } = defineProps<props>()
  const emit = defineEmits(['update:modelValue'])

  // 关闭组件层
  const closeComponentBox = () => {
    emit('update:modelValue', !modelValue)
  }
</script>

<template>
  <div class="compbox">
    <!-- 左侧关闭按钮 -->
    <div
      v-if="arrowLoc === 'left'"
      class="closeIcon leftIcon"
      @click="closeComponentBox"
    >
      <el-icon
        color="#fff"
        :size="20"
        class="arrowIcon"
        :class="{ arrowIconAcitve: !modelValue }"
      >
        <i-ep-ArrowRight />
      </el-icon>
    </div>

    <div
      class="component-box"
      :class="{ closeComponent: !modelValue }"
    >
      <slot />
    </div>

    <!-- 右侧关闭按钮 -->
    <div
      v-if="arrowLoc === 'right'"
      class="closeIcon rightIcon"
      @click="closeComponentBox"
    >
      <el-icon
        color="#fff"
        :size="20"
        class="arrowIcon"
        :class="{ arrowIconAcitve: !modelValue }"
      >
        <i-ep-ArrowLeft />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .compbox {
    display: flex;
    align-items: center;
  }
  .component-box {
    width: 267px;
    height: 90vh;
    background: #252627;
    border-radius: 20px;
    box-sizing: border-box;
    transition: width 0.5s;
    overflow: hidden;
  }

  .closeComponent {
    width: 0;
  }

  .closeIcon {
    width: 25px;
    height: 182px;
    background: #252627;
    display: flex;
    align-items: center;
    cursor: pointer;

    .arrowIcon {
      transform: rotate(0);
      transition: transform 0.5s;
    }
  }

  .leftIcon {
    border-radius: 20px 0 0 20px;
    .arrowIcon {
      margin-left: 5px;
    }
    .arrowIconAcitve {
      transform: rotate(-180deg);
    }
  }

  .rightIcon {
    border-radius: 0 20px 20px 0;
    .arrowIconAcitve {
      transform: rotate(180deg);
    }
  }
</style>
