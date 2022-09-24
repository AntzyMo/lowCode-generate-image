import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

export const useClickCompOffest = defineStore('ClickCompOffest', () => {
  const offset = reactive({
    offestX: 0,
    offestY: 0
  })

  const setOffest = (x: number, y: number) => {
    offset.offestX = x
    offset.offestY = y
  }

  return { ...toRefs(offset), setOffest }
})
