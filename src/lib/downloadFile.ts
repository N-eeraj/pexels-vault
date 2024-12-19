export async function downloadImage(url: string, fileName: string | undefined) {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    if (fileName) {
      link.download = fileName
    }
    link.click()
  } catch (error) {
    console.error("Error downloading the image:", error)
  }
}
