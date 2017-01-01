import React, { Component } from 'react';

class main extends Component {
  render() {
    return (
      <div className="App">
        <h1>Main Page</h1>
        {this.props.children}
      </div>
    );
  }
}

export default main;
