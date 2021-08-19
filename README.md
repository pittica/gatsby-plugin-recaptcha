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

```shell
npm install @pittica/gatsby-plugin-recaptcha
```

## Usage

Import the component classes.

```javascript
import ReCaptcha, { Loader } from "@pittica/gatsby-plugin-recaptcha"
```

The component works better in _React.Component_ objects.

```javascript
export default class ContactPage extends React.Component {
  constructor(props, context) {
    Loader()
  }

  verifyCallback = (token) => {
  }

  render() {
    return (
      <ReCaptcha
        action="homepage"
        sitekey="RECAPTCHA_PUBLIC_KEY"
        callback={this.verifyCallback}
      />
    )
  }
}
```
### Attributes

The components has some attributes.

#### sitekey

* Type: **string**
* Required: **yes**

ReCaptcha public key.

#### action

* Type: **string**
* Required: **yes**

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

(c) 2020-2021, Pittaca S.r.l.s.
