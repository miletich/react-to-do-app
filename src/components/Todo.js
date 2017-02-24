import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Checkbox } from 'react-bootstrap';
import moment from 'moment';

import actions from './../actions/actions';

const Todo = (props) => {
    const {id, text, completed, createdAt, completedAt, dispatch} = props;
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
              dispatch(actions.toggleTodo(id));
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

const wrapped = connect()(Todo);

export { wrapped as default, Todo };
