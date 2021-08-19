import isReady from "./is-ready"

export default function unloader() {
  if (typeof document !== "undefined") {
    let script = document.getElementById("grecaptcha-lib")

    if (script) {
      document.body.removeChild(script)
    }

    if (isReady()) {
      delete window.grecaptcha

      script = document.querySelector(
        '[src^="https://www.gstatic.com/recaptcha/"]'
      )

      if (script) {
        script.parentNode.removeChild(script)
      }
    }
  }
}
