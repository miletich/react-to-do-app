import React, { Component } from 'react';
import { FormGroup, Checkbox } from 'react-bootstrap';
import moment from 'moment';

class Todo extends Component {
  render() {
    const {text, completed, createdAt, completedAt} = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';

    const renderDate = () => {
      let message = 'Created ';
      let timeStamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do, YYYY @ h:mm a');
    };

    return (
      <li className = {todoClassName}>
        <FormGroup>
          <Checkbox inline
            onClick={() => {
              this.props.onToggle(this.props.id);
            }}
            checked={completed}>
            <div>
              <p>{text}</p>
              <p className="todo__subtext">{renderDate()}</p>
            </div>
          </Checkbox>
        </FormGroup>
      </li>
    );
  }
}

/*const Todo = (props) =>
  <li>
    <FormGroup>
      <Checkbox inline
        onClick={() => {
          props.onToggle(props.id);
        }}
        checked={props.completed}>
        {props.text}
      </Checkbox>
    </FormGroup>
  </li>
*/
export default Todo;
