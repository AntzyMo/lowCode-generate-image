<script setup lang="ts">
  import { useCanvasSize } from '@/stores/useHeader'

  import useMethods from './hooks'

  const { canvasSize } = useCanvasSize()
  const { downloadImg } = useMethods()
</script>

<template>
  <header class="header-container">
    <div class="center-box">
      <div
        class="methodsBox"
        @click="downloadImg"
      >
        <img
          class="icon"
          src="@/assets/out.svg"
          alt="导出"
        />
      </div>

      <div class="canvasSize-box">
        <div class="name">画布大小</div>
        <div class="size">
          <div class="input-box">
            <!-- <span>128</span> -->
            <input
              v-model="canvasSize.width"
              @keydown.up="canvasSize.width++"
              @keydown.down="canvasSize.width--"
            />
          </div>

          <el-icon :size="20">
            <i-ep-Close />
          </el-icon>
          <div class="input-box">
            <input
              v-model="canvasSize.height"
              @keydown.up="canvasSize.height++"
              @keydown.down="canvasSize.height--"
            />
            <!-- <span>128</span> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header-container {
    .center-box {
      background: #fff;
      border-radius: 20px;
      width: 477px;
      height: 66px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 18px;
      left: 50%;
      transform: translateX(-50%);
      .methodsBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .icon {
          width: 23px;
          height: 23px;
          margin-right: 18px;
        }
      }
      .canvasSize-box {
        display: flex;
        align-items: center;
        justify-content: center;
        .name {
          font-size: 22px;
          margin-right: 20px;
        }
        .size {
          padding: 5px 9px;
          border-radius: 6px;
          background: #d9d9d9;
          display: flex;
          align-items: center;

          .input-box {
            // cursor: pointer;
            input {
              width: 70px;
              font-size: 20px;
              background: transparent;
              outline: none;
              border: none;
              text-align: center;
              direction: rtl;
            }
          }
        }
      }
    }
  }
</style>
