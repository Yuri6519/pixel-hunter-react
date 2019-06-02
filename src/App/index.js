/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import { any } from 'prop-types';

export default class App extends PureComponent {
  static propTypes = {
    gg: any,
  }

  static defaultProps= {
    gg: null,
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { gg = null } = this.props;

    return (
      <div>A pixel hunter application will be deployed here</div>
    );
  }
}
