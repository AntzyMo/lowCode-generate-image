import { useClickCompOffest } from '@/stores/useLeftComponent'
import type { compMapType, styleType } from '@/types/component'
import { addSuffixPx } from '@/utils'
import { image } from '@/utils/data'

// 给style添加px
const addStylePx = (targetMap: styleType) => {
  for (const key in targetMap) {
    if (typeof targetMap[key] === 'number') {
      targetMap[key] = addSuffixPx(targetMap[key])
    }
  }
}

export default () => {
  const compMap = ref<compMapType[]>([])

  const handleDrop = (e: DragEvent) => {
    const { offestX, offestY } = useClickCompOffest()
    let target: any

    const [tag, id] = e.dataTransfer?.getData('comp').split(',')

    if (tag === 'img') {
      target = image()
    }

    const { style } = target
    console.log(e.clientX, offestX, 'e.clientX - offestX')

    style.left = e.clientX - offestX
    style.top = e.clientY - offestY

    addStylePx(style)
    console.log(style, 'style')

    compMap.value.push(target)
  }

  return {
    compMap,
    handleDrop
  }
}
