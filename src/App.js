import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'


class App extends Component() {
  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: 1,
        completed: false
      },
      {
        title: 'Meeting with wife',
        id: 2,
        completed: false
      },
      {
        title: 'Meeting with boss',
        id: 3,
        completed: false
      },
    ]
  }
  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <h1>hello</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
