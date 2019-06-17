import React, { PureComponent, Fragment } from 'react';
import Header from '../../organisms/header';
import Timer from '../../atoms/timer';
import Lives from '../../molecules/lives';
import StatList from '../../molecules/stat-list';
// import { dispatch, select } from '../../../core';

class Game extends PureComponent {
  get timer() {
    return <Timer />;
  }

  get lives() {
    return <Lives />;
  }

  get level() {
    return <div>LEVEL:::</div>;
  }

  get footer() {
    return <StatList />;

    // return (
    //   <ul className="stats">
    //     <li className="stats__result stats__result--wrong" />
    //     <li className="stats__result stats__result--slow" />
    //     <li className="stats__result stats__result--fast" />
    //     <li className="stats__result stats__result--correct" />
    //     <li className="stats__result stats__result--unknown" />
    //     <li className="stats__result stats__result--unknown" />
    //     <li className="stats__result stats__result--unknown" />
    //     <li className="stats__result stats__result--unknown" />
    //     <li className="stats__result stats__result--unknown" />
    //     <li className="stats__result stats__result--unknown" />
    //   </ul>
    // );
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
