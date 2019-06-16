import React, { PureComponent } from 'react';
import { func, bool } from 'prop-types';

export default class ButtonRules extends PureComponent {
  static propTypes ={
    onClick: func,
    disabled: bool,
  }

  static defaultProps ={
    onClick: null,
    disabled: true,
  }

  render() {
    const { onClick, disabled } = this.props;

    return (
      <button
        className="rules__button  continue"
        type="submit"
        disabled={disabled}
        onClick={onClick}
      >
          Go!
      </button>

    );
  }
}
