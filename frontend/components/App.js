import React from 'react'
import { v4 as uuid } from 'uuid'
import Form from './Form'
import TodoList from './TodoList'


const initialState = {
  errorMessage: '',
  todos: [],
  userInput: '',
}

export default class App extends React.Component {
  state = initialState;
// Handlers
// toggles complete
  toggleComplete = (id) => {
    this.setState({
      ...this.state, todos: this.state.todos.map(todo => {
        return todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
      })
    })
  }
// user input
  todoInput = (value) => {
    this.setState({
      ...this.state,
      userInput: value,
    })
  }
// submits inputs to state
  submitForm = () => {
    const newTodo = {
      name: this.state.userInput,
      id: uuid(),
      completed: false,
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
      userInput: '',
    })
  }
// removes completed todos
  removeComplete = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(
        entry => entry.completed === false
      ),
    });
  }

  render() {
    const { todos, userInput } = this.state;
    return (
      <div>
        <TodoList todos={ todos } toggleComplete={ this.toggleComplete }/>
        <Form 
          onSubmit={ this.submitForm } 
          onChange={ this.todoInput } 
          input={ userInput }
          remove={ this.removeComplete }
        />
      </div>
    )
  }
}
