import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCanvasSize = defineStore('CanvasSize', () => {
  const canvasSize = reactive({
    width: 128,
    height: 128
  })

  return { canvasSize }
})
