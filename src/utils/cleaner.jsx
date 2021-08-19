export default function cleaner(id) {
  if (typeof document !== "undefined") {
    const element = document.getElementById(id)

    if (element) {
      element.innerHTML = ""
    }
  }
}
