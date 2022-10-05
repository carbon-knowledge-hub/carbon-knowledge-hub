export default function copyToClipboard(ref) {
  if (!ref.current) return
  if (typeof navigator === "undefined") return
  navigator?.clipboard?.writeText(ref.current.innerText)
}
