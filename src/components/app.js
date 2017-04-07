import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        Govnet 2.0 - Shirka
          {this.props.children}
      </div>
    );
  }
}
