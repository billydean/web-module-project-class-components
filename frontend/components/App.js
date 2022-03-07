import React from 'react'
import { v4 as uuid } from 'uuid'

const todos = [
  {
    name: '',
    id: uuid(),
    completed: false,
  },
  {
    name: '',
    id: uuid(),
    completed: false,
  }
]
const initialState = {
  errorMessage: '',
  todos,
}
export default class App extends React.Component {
  state = initialState;
  
  render() {
    return (
      <div>
        Todo App
      </div>
    )
  }
}
