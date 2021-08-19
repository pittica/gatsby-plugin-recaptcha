import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import useInterval from "react-useinterval"

import isReady from "../utils/is-ready"
import loader from "../utils/loader"
import unloader from "../utils/unloader"
import cleaner from "../utils/cleaner"

export default function ReCaptcha({
  id,
  badge,
  size,
  onVerify,
  siteKey,
  action,
  theme,
  submitted,
}) {
  const [ready, setReady] = useState(isReady())
  const [client, setClient] = useState(null)
  const [delay, setDelay] = useState(1000)
  const canLoad = !ready && client === null

  useEffect(() => {
    if (canLoad) {
      loader()
    }
  }, [canLoad])

  useEffect(() => {
    return () => {
      unloader()
      cleaner(id)
    }
  }, [])

  useInterval(() => {
    if (ready && isReady() && client === null) {
      render()
      setDelay(null)
    } else {
      if (isReady()) {
        setReady(true)
      }
    }
  }, delay)

  const render = () => {
    const response = window.grecaptcha.render(id, {
      sitekey: siteKey,
      badge,
      size,
      theme,
    })

    setClient(response)
  }

  useEffect(() => {
    if (ready && client !== null && submitted) {
      window.grecaptcha.execute(client, { action }).then((token) => {
        if (typeof onVerify !== "undefined") {
          onVerify(token)
        }
      })
    }
  }, [submitted, ready, client])

  return ready ? <div id={id} /> : <div id={id} className="g-recaptcha" />
}

ReCaptcha.propTypes = {
  id: PropTypes.string,
  badge: PropTypes.string,
  size: PropTypes.string,
  onVerify: PropTypes.func,
  submitted: PropTypes.bool.isRequired,
  siteKey: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  theme: PropTypes.string,
}

ReCaptcha.defaultProps = {
  id: "g-recaptcha",
  badge: "inline",
  size: "invisible",
  theme: "light",
  action: "homepage",
  submitted: false,
}
