import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl, Checkbox } from 'react-bootstrap';

import actions from './../actions/actions';

class TodoSearch extends Component {
  render() {
    const {dispatch, showCompleted, searchText} = this.props;
    return (
      <div>
        <FormGroup className="conatiner__header">
          <FormControl type="search"
            placeholder="Search todos..."
            value={searchText}
            onChange={() => {
              const searchText = ReactDOM.findDOMNode(this.searchText).value;
              dispatch(actions.setSearchText(searchText));
            }}
            ref={ref => this.searchText = ref}/>
          <Checkbox
            onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }}
            checked={showCompleted}
            inputRef={ref => this.showCompleted = ref}>
            Show compoleted todos
          </Checkbox>
        </FormGroup>
      </div>
    );
  }
}

const wrapped = connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
export {wrapped as default, TodoSearch};
