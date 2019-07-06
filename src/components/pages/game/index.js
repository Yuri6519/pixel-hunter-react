import React, { PureComponent, Fragment } from 'react';
import Header from '../../organisms/header';
import Timer from '../../atoms/timer';
import Lives from '../../molecules/lives';
import StatList from '../../molecules/stat-list';
import Processor from '../../organisms/page-processor';

class Game extends PureComponent {
  get timer() {
    return <Timer />;
  }

  get lives() {
    return <Lives />;
  }

  get level() {
    return <Processor />;
  }

  get footer() {
    return <StatList />;
  }

  render() {
    return (
      <Fragment>
        <Header timer={this.timer} lives={this.lives} />
        <section className="game">
          {this.level}
          {this.footer}
        </section>
      </Fragment>

    );
  }
}

export default Game;
