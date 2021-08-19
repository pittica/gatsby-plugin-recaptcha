export default function loader() {
  if (typeof document !== "undefined") {
    const script = document.createElement("script")

    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`
    script.id = `grecaptcha-lib`

    document.body.appendChild(script)
  }
}
