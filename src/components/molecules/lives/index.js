import React, { PureComponent } from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import { MAX_LIFES_COUNT } from '../../../common/constants';
import LifeHeart from '../../atoms/life-heart';
import { select } from '../../../core';

class Lives extends PureComponent {
  static propTypes ={
    lifeCount: number,
  }

  static defaultProps ={
    lifeCount: MAX_LIFES_COUNT,
  }

  missedLives = count => {
    const arr = [];
    for (let i = 1; i <= count; i++) {
      arr.push(<LifeHeart type="empty" key={`empty_${i}`} />);
    }
    return arr;
  }

  lives = count => {
    const arr = [];
    for (let i = 1; i <= count; i++) {
      arr.push(<LifeHeart type="full" key={`full_${i}`} />);
    }
    return arr;
  }

  render() {
    const { lifeCount } = this.props;
    const missedCount = MAX_LIFES_COUNT - lifeCount;
    return (
      <div className="game__lives">
        {this.missedLives(missedCount)}
        {this.lives(lifeCount)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lifeCount: select.game.lifeCount(state),
});

export default connect(mapStateToProps)(Lives);
