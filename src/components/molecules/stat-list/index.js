import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { array } from 'prop-types';
import { select } from '../../../core';
import Li from '../../atoms/stat-element';
import { initResp } from './utils';

class StatList extends PureComponent {
  static propTypes = {
    data: array,
  }

  static defaultProps = {
    data: [],
  }

  get data() {
    const res = [];
    const { data } = this.props;

    initResp(data);

    for (let i = 0; i < data.length; i++) {
      res.push(<Li type={data[i]} key={i} />);
    }

    return res;
  }

  render() {
    return (
      <ul className="stats">
        {this.data}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  data: select.game.statData(state),
});

export default connect(mapStateToProps)(StatList);
