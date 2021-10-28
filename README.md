# pittica/gatsby-plugin-recaptcha

![License](https://img.shields.io/github/license/pittica/gatsby-plugin-recaptcha)
![Version](https://img.shields.io/github/package-json/v/pittica/gatsby-plugin-recaptcha)
![Release](https://img.shields.io/github/v/release/pittica/gatsby-plugin-recaptcha)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/pittica/gatsby-plugin-recaptcha/react)

## Description

[ReCaptcha](https://www.google.com/recaptcha/) component for [GatsbyJS](https://www.gatsbyjs.org/).

This plugin has been developed using [GatsbyJS](https://www.gatsbyjs.org/) tutorials.

## Install

[![npm](https://img.shields.io/npm/v/@pittica/gatsby-plugin-recaptcha)](https://www.npmjs.com/package/@pittica/gatsby-plugin-recaptcha)
[![npm](https://img.shields.io/npm/dm/@pittica/gatsby-plugin-recaptcha)](https://www.npmjs.com/package/@pittica/gatsby-plugin-recaptcha)

```shell
npm install @pittica/gatsby-plugin-recaptcha
```

## Usage

Import the component classes.

```javascript
import ReCaptcha from "@pittica/gatsby-plugin-recaptcha"
```

Use the component in React functions.

```javascript
import React, { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const submit = (token) => {}

  return (
    <div>
      <ReCaptcha
        action="homepage"
        siteKey="RECAPTCHA_PUBLIC_KEY"
        onVerify={(token) => submit(token)}
        submitted={submitted}
      />
      <button onClick={() => setSubmitted(true)}>Submit</button>
    </div>
  )
}
```
### Attributes

The components has some attributes.

#### siteKey

* Type: **string**
* Required: **yes**

ReCaptcha public key.

#### action

* Type: **string**
* Required: **yes**
* Default value: **homepage**

ReCaptcha action. Common values are _homepage_ or _login_.

#### id

* Type: **string**
* Required: **no**

HTML ID for multiple ReCaptcha elements.

#### badge

* Type: **string**
* Required: **no**
* Values: **bottomright**, **bottomleft**, **inline**
* Default value: **inline**

Badge position and aspect.

#### size

* Type: **string**
* Required: **no**
* Values: **compact**, **normal**, **invisible**
* Default value: **invisible**

Badge size.

#### callback

* Type: **function**
* Required: **no**

Validation callback.

#### theme

* Type: **string**
* Required: **no**
* Values: **light**, **dark**
* Default value: **light**

## Copyright

(c) 2020-2021, [Pittica S.r.l.](https://pittica.com).
