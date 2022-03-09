import React from 'react'

/*
 * Input field should take in user input, 
    AND allow user to press Enter 
      OR click on the Submit Button 
        TO add a todo to your list 
 * 
 */
export default class Form extends React.Component {
  onSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit();
  }
  onChange = evt => {
    const {value} = evt.target;
    this.props.onChange(value);
  }

  render() {
    const {input, remove } = this.props;

    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input 
          type='text'
          placeholder='Type todo'
          value={input}
          onChange={this.onChange}
        />
        <input 
          type='submit'
        />
        </form>
        <input 
          type='button'
          name='hide'
          value='Remove Completed'
          onClick={ remove }
        />
      </div>
    )
  }
}
