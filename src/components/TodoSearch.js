import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl, Checkbox } from 'react-bootstrap';

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const showCompleted = ReactDOM.findDOMNode(this.showCompleted).checked;
    const searchText = ReactDOM.findDOMNode(this.searchText).value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div>
        <FormGroup>
          <FormControl type="search"
            placeholder="Search todos..."
            onChange={this.handleSearch}
            ref={ref => this.searchText = ref}/>
          <Checkbox
            onChange={this.handleSearch}
            inputRef={ref => this.showCompleted = ref}>
            Show compoleted todos
          </Checkbox>
        </FormGroup>
      </div>
    );
  }
}

export default TodoSearch;
