export default function isReady() {
  return (
    typeof window !== "undefined" &&
    typeof window.grecaptcha !== "undefined" &&
    typeof window.grecaptcha.execute !== "undefined"
  )
}
