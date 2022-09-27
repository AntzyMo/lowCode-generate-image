import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { compMapType } from '@/types/component'

export const useCompMap = defineStore('CompMap', () => {
  const compMap = ref<compMapType[]>([])
  const activeIdx = ref(-1)

  const addCompMap = (data: compMapType) => {
    activeIdx.value = compMap.value.length
    compMap.value.push(data)
  }

  // 获取当前选中的样式
  const getCurrentStyle = () => compMap.value[activeIdx.value].style

  return { activeIdx, compMap, addCompMap, getCurrentStyle }
})
