import React, { Component } from 'react';
import { FormGroup, Checkbox } from 'react-bootstrap';


class Todo extends Component {
  render() {
    return (
      <li>
        <FormGroup>
          <Checkbox inline
            onClick={() => {
              this.props.onToggle(this.props.id);
            }}
            checked={this.props.completed}>
            {this.props.text}
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
