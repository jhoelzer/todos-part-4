import React, { Component } from 'react';
import '../index.css';
import TodoList from './TodoList.js';
import todoList from '../todos.json';
import { Switch, Route } from "react-router-dom";
import { deleteOne, toggleCompleted } from '../actions/index.js';
import { connect } from 'react-redux';

class App extends Component {

  toggleCompleted = clickedId => event => {
    this.props.toggleCompleted(clickedId)
  };

  deleteOne = clickedId => event => {
    this.props.toggleCompleted(clickedId)
  };

  render() {
    const { todos } = this.props;
    const allHandlingProps = {
      deleteOne: this.deleteOne,
      toggleCompleted: this.toggleCompleted,
      completed: todos.filter(todo => !todo.completed).length
    };

    return (
      <section className="todoapp">
        <Switch>
          <Route exact path="/active" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => !todo.completed)} />} />
          <Route exact path="/completed" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => todo.completed)} />} />
          <Route exact path="/" render={props => <TodoList {...props} {...allHandlingProps} todos={todos} />} />
        </Switch>
      </section>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOne: id => dispatch(deleteOne(id)),
    toggleCompleted: id => dispatch(toggleCompleted(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);