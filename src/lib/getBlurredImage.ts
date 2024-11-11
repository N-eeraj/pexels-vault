import { Photo } from "@schemas/photos"
import { getPlaiceholder } from "plaiceholder"

export default async function getBase64(imageUrl: string) {
  try {
    const image = await fetch(imageUrl)
    const buffer = await image.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
  } catch (error) {
    console.error(error)
    return imageUrl
  }
}

export async function getBlurredPhotos(photoUrls: Photo[]): Promise<Photo[]> {
  const base64Promises = photoUrls.map(url => getBase64(url.src.tiny))
  const base64Photos = await Promise.all(base64Promises)
  return photoUrls.map((photo, index) => {
    photo.blurredDataUrl = base64Photos[index]
    return photo
  })
}
