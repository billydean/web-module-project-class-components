import React from 'react'
import { v4 as uuid } from 'uuid'
import Form from './Form'

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
        <Form />
      </div>
    )
  }
}
