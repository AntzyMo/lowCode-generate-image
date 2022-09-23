import material from '@/assets/material.svg'

export interface listType {
  text: string
  src: string
  active: boolean
}

export default () => {
  const categoryList = ref<listType[]>([
    {
      text: '素材',
      src: material,
      active: true
    },
    {
      text: '素材1',
      src: material,
      active: false
    }
  ])

  const cateoryItemClick = (data: listType) => {
    const isActiveData = categoryList.value.find(item => item.active === true)!
    if (isActiveData) isActiveData.active = false
    data.active = true
  }

  return { categoryList, cateoryItemClick }
}
