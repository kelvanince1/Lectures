import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase';
import _ from 'lodash';
import NewTodo from './NewTodo';
import Todo from './Todo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: {},
    }
  }

  componentDidMount() {
    firebase.database().ref('/todos').on('value', snapshot => {
      console.log('todos', snapshot.val());
      let todos = snapshot.val()
      this.setState({ todos })
    })

  }

  render() {
    _.map(this.state.todos, (todo,id)=>{
      console.log('todo', todo);
      console.log('id', id);
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NewTodo firebase={firebase}/>
        <ul>
          {_.map(this.state.todos, (todo,id) => <Todo firebase={firebase} id={id} todo={todo} key={id} />)}
        </ul>
      </div>
    );
  }
}

export default App;
