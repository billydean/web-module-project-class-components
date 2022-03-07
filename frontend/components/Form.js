import React from 'react'

/*
 * Input field should take in user input, 
    AND allow user to press Enter 
      OR click on the Submit Button 
        TO add a todo to your list 
 * 
 */
export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input 
          type='text'
          name='text'
          placeholder='Type todo'
          value=''
        />
        <input 
          type='button'
          name='submit'
          value='Submit'
          onClick=''
        />
        <input 
          type='button'
          name='hide'
          value='Hide Completed'
          onClick=''
        />
      </div>
    )
  }
}
