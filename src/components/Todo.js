import React from 'react';
import { FormGroup, Checkbox } from 'react-bootstrap';

const Todo = (props) =>
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

export default Todo;
