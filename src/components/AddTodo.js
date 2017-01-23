import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, FormGroup, Button} from 'react-bootstrap';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newTodo = ReactDOM.findDOMNode(this.inputTodo).value;

    if (newTodo.length > 0) {
      ReactDOM.findDOMNode(this.inputTodo).value = '';
      this.props.onAddTodo(newTodo);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl type="text"
            placeholder="What do you need to do?"
            ref={ref => this.inputTodo = ref}
          />
          <Button type="submit"
            bsStyle="primary">
            Add Todo
          </Button>
        </FormGroup>
      </form>
    );
  }
}

export default AddTodo;
