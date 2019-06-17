import React, { PureComponent } from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import { dispatch, select } from '../../../core';

class Timer extends PureComponent {
  static defaultProps ={
    value: 0,
  }

  static propTypes ={
    value: number,
  }

  componentDidMount() {
    dispatch.timer.reset();
    this.timer = setInterval(() => { this.tick(); }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  tick = async () => {
    await dispatch.timer.tick(1);
  }

  render() {
    const { value } = this.props;

    return (
      <div className="game__timer">{value}</div>
    );
  }
}

const mapStateToProps = (state) => {
  const { timer } = state;
  return ({
    value: timer.value,
    valueMulty: select.timer.valueMulty(state, 2),
  });
};


export default connect(mapStateToProps)(Timer);
