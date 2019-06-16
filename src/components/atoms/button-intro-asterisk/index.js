import React, { PureComponent } from 'react';
import { func } from 'prop-types';

export default class ButtonAsterisk extends PureComponent {
  static propTypes ={
    onClick: func,
  }

  static defaultProps ={
    onClick: null,
  }

  render() {
    const { onClick } = this.props;

    return (
      <button
        className="intro__asterisk asterisk"
        type="button"
        onClick={onClick}
      >
        <span className="visually-hidden">Продолжить</span>
        *
      </button>

    );
  }
}
