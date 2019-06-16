import React, { PureComponent } from 'react';
import Button from '../../atoms/button-greeting';
import { dispatch } from '../../../core';

class Greeting extends PureComponent {
  onClick = () => {
    dispatch.router.next();
  }

  render() {
    return (
      <section className="greeting central--blur">
        <img className="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter" />
        <div className="greeting__asterisk asterisk"><span className="visually-hidden">Я просто красивая звёздочка</span>*</div>
        <div className="greeting__challenge">
          <h3 className="greeting__challenge-title">Лучшие художники-фотореалисты бросают тебе вызов!</h3>
          <p className="greeting__challenge-text">Правила игры просты:</p>
          <ul className="greeting__challenge-list">
            <li>Нужно отличить рисунок от фотографии и сделать выбор.</li>
            <li>Задача кажется тривиальной, но не думай, что все так просто.</li>
            <li>Фотореализм обманчив и коварен.</li>
            <li>Помни, главное — смотреть очень внимательно.</li>
          </ul>
        </div>

        <Button onClick={this.onClick} />

      </section>

    );
  }
}

export default Greeting;
