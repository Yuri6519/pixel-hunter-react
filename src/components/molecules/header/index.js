import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import Button from '../../atoms/button-back';


export default class Header extends PureComponent {
  static propTypes ={
    timer: object,
    lives: object,
  }

  static defaultProps ={
    timer: null,
    lives: null,
  }

  get timer() {
    const { timer } = this.props;
    return timer;
  }

  get lives() {
    const { lives } = this.props;
    return lives;
  }

  render() {
    return (
      <header className="header">
        <Button />
        {this.timer}
        {this.lives}
      </header>
    );
  }
}
