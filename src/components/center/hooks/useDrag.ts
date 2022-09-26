import { ref } from 'vue'

import { useCompMap } from '@/stores/useCenter'
import { useClickCompOffest } from '@/stores/useLeftComponent'
import type { compMapType } from '@/types/component'
import { image } from '@/utils/data'

export default () => {
  const { compMap, addCompMap } = useCompMap()
  const handleDrop = (e: DragEvent) => {
    const { offestX, offestY } = useClickCompOffest()
    let target: any

    const [tag, id] = e.dataTransfer?.getData('comp').split(',')

    if (tag === 'img') {
      target = image()
    }

    const { style } = target

    style.left = e.clientX - offestX
    style.top = e.clientY - offestY

    addCompMap(target)
  }

  return {
    compMap,
    handleDrop
  }
}
