import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object, string, number } from 'prop-types';
import { dispatch, select } from '../../../core';
import {
  GAME_CHANGE_RESP,
  GAME_CHANGE_NONE,
  GAME_CHANGE_LAST,
} from '../../../common/constants';
import Comp from './utils';


class Processor extends PureComponent {
  static propTypes = {
    level: object.isRequired,
    mode: string,
    lives: number,
  }

  static defaultProps = {
    mode: GAME_CHANGE_NONE,
    lives: 0,
  }

  componentDidMount() {
    console.log('Processor::componentDidMount::');

    this.next();
  }

  componentDidUpdate() {
    const { mode, lives } = this.props;

    console.log('Processor::componentDidUpdate::mode::', mode);
    console.log('Processor::componentDidUpdate::lives::', lives);

    switch (mode) {
      case GAME_CHANGE_RESP:
        this.handleNextLevel(lives);
        break;

      case GAME_CHANGE_LAST:
        this.handleLastLevel();
        break;

      default:
        break;
    }
  }

  next = () => { dispatch.game.next(); };

  last = () => { dispatch.game.last(); };

  handleNextLevel = lives => {
    if (lives > 0) {
      this.next();
    } else {
      this.last();
    }
  }

  handleLastLevel = () => {
    dispatch.router.last();
  }

  render() {
    const { level } = this.props;

    console.log('Processor::render::level::', level);

    return <Comp data={level} />;
  }
}

const mapStateFromProps = state => ({
  level: select.game.level(state),
  mode: select.game.mode(state),
  lives: select.game.lifeCount(state),
});

export default connect(mapStateFromProps)(Processor);
