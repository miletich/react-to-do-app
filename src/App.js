import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoSearch from './components/TodoSearch';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <h1 className="page-title">Todo App</h1>
            <div className="conatiner">
              <TodoSearch />
              <TodoList/>
              <AddTodo />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
