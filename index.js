import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Loader = () => {
  if (typeof document !== 'undefined') {
    const script = document.createElement('script');

    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
    script.id = `grecaptcha-lib`;

    document.body.appendChild(script);
  }
};

export const Unloader = () => {
  if (typeof document !== 'undefined') {
    clearInterval(check);

    let script = document.getElementById('grecaptcha-lib');

    if (script) {
      document.body.removeChild(script);
    }

    if (IsReady()) {
      delete window.grecaptcha;

      script = document.querySelector('[src^="https://www.gstatic.com/recaptcha/"]');

      if (script) {
        script.parentNode.removeChild(script);
      }
    }
  }
};

export const IsReady = () =>
  typeof window !== 'undefined' &&
  typeof window.grecaptcha !== 'undefined' &&
  typeof window.grecaptcha.execute !== 'undefined';

let check;

export default class ReCaptcha extends Component {
  constructor(props) {
    super(props);

    this.execute = this.execute.bind(this);

    this.state = {
      ready: IsReady()
    };

    if (!this.state.ready) {
      check = setInterval(this.update.bind(this), 1000);
    } else {
      this.execute();
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.ready && !prevState.ready) {
      this.execute();
    }
  }

  componentWillUnmount() {
    Unloader();
  }

  execute() {
    if (this.state.ready) {
      let clientId = window.grecaptcha.render(this.props.id, {
        sitekey: this.props.sitekey,
        badge: this.props.badge,
        size: this.props.size,
        theme: this.props.theme
      });

      const action = this.props.action;

      window.grecaptcha.execute(clientId, { action }).then((token) => {
        this.verify(token);
      });
    }
  }

  verify(token) {
    if (typeof this.props.callback !== 'undefined') {
      this.props.callback(token);
    }
  }

  update() {
    if (IsReady()) {
      this.setState(() => ({ ready: true }));

      clearInterval(check);
    }
  }

  render() {
    return this.state.ready ? <div id={this.props.id} /> : <div id={this.props.id} className="g-recaptcha" />;
  }
}

ReCaptcha.propTypes = {
  id: PropTypes.string,
  badge: PropTypes.string,
  size: PropTypes.string,
  callback: PropTypes.func,
  sitekey: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
};

ReCaptcha.defaultProps = {
  id: 'g-recaptcha',
  badge: 'inline',
  size: 'invisible',
  theme: 'light'
};
