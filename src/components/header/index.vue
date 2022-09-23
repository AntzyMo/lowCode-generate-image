<script setup lang="ts"></script>

<template>
  <header class="header-container">
    <div class="center-box">
      <div class="canvasSize-box">
        <div class="name">画布大小</div>
        <div class="size">
          <span>128</span>
          <el-icon :size="20">
            <i-ep-Close />
          </el-icon>
          <span>128</span>
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
          span {
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
