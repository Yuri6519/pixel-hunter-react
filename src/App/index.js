import React, { PureComponent } from 'react';
import Timer from '../components/atoms/timer';


export default class App extends PureComponent {
  render() {
    return (
      <div>
        A pixel hunter application will be deployed here:
        <Timer />
      </div>
    );
  }
}
