import { useClickCompOffest } from '@/stores/useLeftComponent'
import type { compMapType } from '@/types/component'
import { image } from '@/utils/data'

const { setOffest } = useClickCompOffest()

export default () => {
  const compMap = ref<compMapType[]>([image()])

  // 开始拖
  const handleDragStart = (e: DragEvent, item: compMapType) => {
    e.dataTransfer?.setData('comp', `${item.tag},${item.id}`)
  }

  // 点击拖拽前的事件
  const clickBox = (e: MouseEvent) => {
    setOffest(e.offsetX, e.offsetY)
  }

  return {
    handleDragStart,
    clickBox,
    compMap
  }
}
