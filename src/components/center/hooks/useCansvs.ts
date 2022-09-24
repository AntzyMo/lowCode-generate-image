import { useCanvasSize } from '@/stores/useHeader'
import { addSuffixPx } from '@/utils'
const { canvasSize } = useCanvasSize()

export default () => {
  const width = computed(() => addSuffixPx(canvasSize.width))
  const height = computed(() => addSuffixPx(canvasSize.height))

  return { width, height }
}
