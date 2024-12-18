export default function getFormattedTime(time: number) {
  const min = Math.floor(time / 60)
  const sec = String(Math.round(time) % 60).padStart(2, "0")
  return `${min}:${sec}`
}
