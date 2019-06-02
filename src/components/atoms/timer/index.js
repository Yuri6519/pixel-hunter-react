import React, { PureComponent, Fragment } from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import { dispatch, select } from '../../../core';

class Timer extends PureComponent {
  static defaultProps ={
    value: 0,
    valueMulty: 0,
  }

  static propTypes ={
    value: number,
    valueMulty: number,
  }

  componentDidMount() {
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
    const { value, valueMulty } = this.props;

    return (
      <Fragment>
        <div>{value}</div>
        <div>{valueMulty}</div>
      </Fragment>
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
