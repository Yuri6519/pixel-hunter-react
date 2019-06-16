import React, { PureComponent } from 'react';
import { func } from 'prop-types';

export default class ButtonGreeting extends PureComponent {
  static propTypes ={
    onClick: func,
  }

  static defaultProps ={
    onClick: null,
  }

  render() {
    const { onClick } = this.props;

    return (
      <button className="greeting__continue" type="button" onClick={onClick}>
        <span className="visually-hidden">Продолжить</span>
        <svg className="icon" width="64" height="64" viewBox="0 0 64 64" fill="#000000">
          <use xlinkHref="img/sprite.svg#arrow-right" />
        </svg>
      </button>
    );
  }
}
