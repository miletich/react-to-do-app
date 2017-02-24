import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import { FormControl, FormGroup, Button} from 'react-bootstrap';

import actions from './../actions/actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const newTodo = ReactDOM.findDOMNode(this.inputTodo).value;

    if (newTodo.length > 0) {
      ReactDOM.findDOMNode(this.inputTodo).value = '';
      dispatch(actions.addTodo(newTodo));
    }
  }

  render() {
    return (
      <form className="container__footer" onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl type="text"
            placeholder="What do you need to do?"
            ref={ref => this.inputTodo = ref}
          />
          <Button type="submit"
            bsStyle="primary"
            block>
            Add Todo
          </Button>
        </FormGroup>
      </form>
    );
  }
}

const wrapped = connect()(AddTodo);
export {wrapped as default, AddTodo};
