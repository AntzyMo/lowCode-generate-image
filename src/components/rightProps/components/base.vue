<script setup lang="ts">
  import type { styleType } from '@/types/component'

  import PropsBox from './PropsBox.vue'
  const activeMap = inject<styleType>('activeMap')!
</script>

<template>
  <PropsBox>
    <CardBox
      v-if="activeMap"
      title="基础"
    >
      <div class="item">
        <div class="input-box">
          <div class="name">X</div>
          <input
            v-model="activeMap.left"
            maxlength="4"
            class="input"
            @keydown.up="activeMap.left++"
            @keydown.down="activeMap.left--"
          />
        </div>

        <div class="input-box">
          <div class="name">Y</div>
          <input
            v-model="activeMap.top"
            class="input"
            maxlength="4"
            @keydown.up="activeMap.top++"
            @keydown.down="activeMap.top--"
          />
        </div>
      </div>

      <div class="item">
        <div class="input-box">
          <div class="name">W</div>
          <input
            v-model="activeMap.width"
            maxlength="4"
            class="input"
            @keydown.up="activeMap.width++"
            @keydown.down="activeMap.width--"
          />
        </div>
        <div class="input-box">
          <div class="name">H</div>
          <input
            v-model="activeMap.height"
            maxlength="4"
            class="input"
            @keydown.up="activeMap.height++"
            @keydown.down="activeMap.height--"
          />
        </div>
      </div>
    </CardBox>
  </PropsBox>
</template>

<style lang="scss" scoped>
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .name {
      font-size: 14px;
      color: #858585;
      margin-right: 7px;
      width: 30px;
    }

    .input-box {
      display: flex;
      align-items: center;
      border: 1px solid transparent;
      padding: 5px 10px;
      width: 60px;

      &:nth-child(1) {
        margin-right: 10px;
      }

      .input {
        width: 100%;
        background: transparent;
        outline: none;
        border: none;
        // direction: rtl;
        font-size: 14px;
        color: #fff;
        text-align: left;
        padding-right: 10px;
        font-size: 10px;
      }

      &:hover {
        border: 1px solid #444;
      }
    }
  }
</style>
