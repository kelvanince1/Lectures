import React, {Component} from 'react';
import axios from 'axios';

export default class Todps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[]
    }

    this._handleSubmit = this._handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('https://frozen-gorge-68763.herokuapp.com/todos', {
      headers: {
        'Authorization': `Bearer ${this.props.auth.getToken()}`
      }
    }).then((response) => {
      this.setState({
        todos: response.data
      })
    })
  }

  _handleSubmit(e) {
    e.preventDefault();
    let task = this.refs.taskField.value
    axios.post('https://frozen-gorge-68763.herokuapp.com/todos', {
      task: task,
      completed: false
    },{
    headers: {
      'Authorization': `Bearer ${this.props.auth.getToken()}`
    }
  }).then(response => {
    console.log(response);
    let todo = response.data;
    let todos = this.state.todos
    todos.push(todo)
    this.setState({
      todos:todos
    })

    this.refs.taskField.value = '';
  })
}
    render() {
      return (
        <div>
        <br />
        <br />
          <form onSubmit={this._handleSubmit}>
            <input type="text" ref="taskField"/>
            <input type="submit" />
          </form>
          <ul>
            {this.state.todos.map(todo => <li key={todo._id}>{todo.task}</li>)}
          </ul>
        </div>
      )
    }
}
