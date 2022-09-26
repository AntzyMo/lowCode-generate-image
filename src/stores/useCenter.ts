import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { compMapType } from '@/types/component'

export const useCompMap = defineStore('CompMap', () => {
  const compMap = ref<compMapType[]>([])
  const activeIdx = ref(0)

  const addCompMap = (data: compMapType) => {
    activeIdx.value = compMap.value.length
    compMap.value.push(data)
  }

  return { activeIdx, compMap, addCompMap }
})
