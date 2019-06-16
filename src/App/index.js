import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import Component from './utils';

class App extends PureComponent {
  static propTypes = {
    currentLevel: string,
  }

  static defaultProps = {
    currentLevel: '',
  }

  componentDidMount() {
    console.log('App::componentDidMount');
  }

  render() {
    const { currentLevel } = this.props;
    return (
      <Component level={currentLevel} />
    );
  }
}

const mapStateToProps = (state) => ({
  currentLevel: state.router.current.value,
});

export default connect(mapStateToProps)(App);
