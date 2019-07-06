import React, { PureComponent } from 'react';

class TwoImageScreen extends PureComponent {
  render() {
    console.log('TwoImageScreen::render::this.props::', this.props);

    return <div>TWO::IMAGE::SCREEN</div>;
  }
}

export default TwoImageScreen;
