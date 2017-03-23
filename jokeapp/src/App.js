import React, { Component } from 'react';
import './App.css';

class JokeContainer extends Component {
  constructor() {
    super();
    this.state = {
      jokes: ["What happens to a frog's car when it breaks down? It gets toad away.", "Q: What did the duck say when he bought lipstick? A: Put it on my bill.", "Q: How do you count cows? A: With a cowculator."]
    }
    this._addJoke = this._addJoke.bind(this);
  }

  _addJoke(newJoke) {
    let currentJokes = this.state.jokes;
    currentJokes.push(newJoke);
    this.setState({
      jokes: currentJokes
    });
  }

    render(){
      return(
        <div>
          <JokeForm addJoke={ this._addJoke }/>
          <JokeList jokes={ this.state.jokes }/>
        </div>
      )
  }
}

class JokeForm extends Component {
  _handleSubmit(event) {
    event.preventDefault();
    let newJoke = this.refs.newJokeText.value;
    console.log(newJoke);
    this.props.addJoke(newJoke);
    this.refs.newJokeText.value = '';
  }
  render() {
    return(
      <form onSubmit={this._handleSubmit.bind(this)}>
        <input type="text" ref="newJokeText"/>
        <input type="submit" value="Add new joke"/>
      </form>
    )
  }
}

class JokeList extends Component {
  render() {
    return(
      <div>
      {this.props.jokes.map((jokeString, index) =>
      <Joke text={jokeString} key={index}/> )}
      </div>
    )
  }
}

class Joke extends Component {
  constructor() {
    super();
    this.state = {
      vote: 0
    }
  }

  _upvote() {
    let currentVotes = this.state.vote;
    this.setState({
      vote: currentVotes + 1
    })
  }

  _downvote() {
    let currentVotes = this.state.vote;
    this.setState({
      vote: currentVotes - 1
    })
  }
    render() {
      return (
        <div>
          <h3>{this.props.text}</h3>
          <Upvoter upvote={ this._upvote.bind(this) }/>
          <Downvoter downvote={ this._downvote.bind(this) }/>
          <p>{this.state.vote}</p>
        </div>
      );
    }
}

class Upvoter extends Component {
  _handleClick() {
    this.props.upvote();
  }
    render(){
      return(
        <i onClick={ this._handleClick.bind(this) } className="fa fa-thumbs-o-up"></i>
      )
    }
}

class Downvoter extends Component {
  _handleClick() {
    this.props.downvote();
  }
    render(){
      return(
        <i onClick={ this._handleClick.bind(this) } className="fa fa-thumbs-o-down"></i>
      )
    }
}

export default JokeContainer;
