import React, { PureComponent } from 'react';
import Button from '../../atoms/button-intro-asterisk';
import { dispatch } from '../../../core';

const TEXT = 'Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.';

class Intro extends PureComponent {
  onClick = () => {
    dispatch.router.next();
  }

  render() {
    return (
      <section className="intro">
        <Button onClick={this.onClick} />
        <p className="intro__motto">
          <sup>*</sup>
          {TEXT}
        </p>
      </section>

    );
  }
}

export default Intro;
