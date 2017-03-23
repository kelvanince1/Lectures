import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalYards: 0
    }
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    let length = +this.refs.length.value;
    let width = +this.refs.width.value;
    let depth = +this.refs.depth.value;
    console.log(length, width, depth)
    let yards: (length * width * depth) / 27

    this.setState({
      totalYards: yards;
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleClick}>
          <input type="text" ref='length' />
          <input type="text" ref='width' />
          <input type="text" ref='depth' />
          <input type="submit" onClick={(e) => this._handleClick(e)} />
        </form>
        <h3>You need {this.state.totalYards} yards of concrete</h3>
      </div>
    );
  }
}

export default App;
