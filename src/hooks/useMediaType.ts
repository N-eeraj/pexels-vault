import { useSearchParams } from "next/navigation"

type MediaType = typeof MEDIA_TYPES[number]["type"]

import { MEDIA_TYPES } from "@constants/pexels"

export default function useMediaType() {
  const searchParams = useSearchParams()

  const type = searchParams.get("type") as MediaType ?? MEDIA_TYPES[0].type
  const icon = MEDIA_TYPES.find(mediaType => mediaType.type === type)?.icon ?? MEDIA_TYPES[0].icon
  const index = MEDIA_TYPES.findIndex(mediaType => mediaType.type === type) ?? 0

  return {
    type,
    icon,
    index,
  }
}
