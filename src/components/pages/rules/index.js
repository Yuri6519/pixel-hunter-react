import React, { PureComponent, Fragment } from 'react';
import Header from '../../molecules/header';
import Button from '../../atoms/button-rules';
import { dispatch } from '../../../core';

class Rules extends PureComponent {
  state = {
    inputValue: '',
  }

  onSubmit = evt => {
    const { inputValue } = this.state;
    evt.preventDefault();
    dispatch.game.setName(inputValue);
    dispatch.router.next();
  }

  onChange = evt => {
    const { currentTarget: { value: inputValue = '' } = {} } = evt;
    this.setState({ inputValue });
  }

  render() {
    const { inputValue } = this.state;
    const btnDisabled = !inputValue;
    return (
      <Fragment>
        <Header />
        <section className="rules">
          <h2 className="rules__title">Правила</h2>
          <ul className="rules__description">
            <li>Угадай 10 раз для каждого изображения фото
              <img className="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото" /> или рисунок
              <img className="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок" />
            </li>
            <li>Фотографиями или рисунками могут быть оба изображения.</li>
            <li>На каждую попытку отводится 30 секунд.</li>
            <li>Ошибиться можно не более 3 раз.</li>
          </ul>
          <p className="rules__ready">Готовы?</p>

          <form className="rules__form" onSubmit={this.onSubmit}>
            <input
              className="rules__input"
              onChange={this.onChange}
              type="text"
              placeholder="Ваше Имя"
              value={inputValue}
            />
            <Button disabled={btnDisabled} />
          </form>

        </section>
      </Fragment>

    );
  }
}

export default Rules;
