import React, { PureComponent } from 'react';
import { dispatch } from '../../../core';

class ButtonBack extends PureComponent {
  onClick = () => {
    dispatch.router.return();
  };

  render() {
    return (
      <button className="back" onClick={this.onClick}>
        <span className="visually-hidden">Вернуться к началу</span>
        <svg className="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
          <use xlinkHref="img/sprite.svg#arrow-left" />
        </svg>
        <svg className="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
          <use xlinkHref="img/sprite.svg#logo-small" />
        </svg>
      </button>
    );
  }
}

export default ButtonBack;
