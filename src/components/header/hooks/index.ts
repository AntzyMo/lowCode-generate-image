import html2canvas from 'html2canvas'

export default () => {
  const downloadImg = async () => {
    const el = document.querySelector('#center')
    const canvas = await html2canvas(el, { useCORS: true, logging: true })
    const dataURL = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = dataURL
    link.download = `.png`
    link.click()
  }

  return { downloadImg }
}
