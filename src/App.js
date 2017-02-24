import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';
import {Grid, Row, Col} from 'react-bootstrap';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoSearch from './components/TodoSearch';
import TodoAPI from './api/TodoAPI';
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ]
    });
  }

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <h1 className="page-title">Todo App</h1>
            <div className="conatiner">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
