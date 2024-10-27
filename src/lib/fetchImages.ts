export const fetchCuratedImages = async () => {
  const response = await fetch("https://api.pexels.com/v1/curated", {
    headers: {
      Authorization: process.env.PEXELS_API_KEY as string,
    }
  })
  const data = await response.json()
  return data
}
