import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCanvasSize = defineStore('CanvasSize', () => {
  const canvasSize = reactive({
    width: 300,
    height: 500
  })

  return { canvasSize }
})
