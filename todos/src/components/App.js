import React, { Component } from 'react';
import '../index.css';
import TodoList from './TodoList.js';
import todoList from '../todos.json';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    todos: todoList
  };

  toggleCompleted = clickedId => event => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === clickedId) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({ todos: newTodos });
  };

  addTodo = event => {
    const { todos } = this.state;
    let makeId = Math.floor(Math.random() * 500000000);

    if (event.keyCode === 13) {
      let newTodos = todos.slice(0);
      let newest = {
          userId: 1,
          id: makeId,
          title: event.target.value,
          completed: false
      };

      newTodos.push(newest);
      this.setState({ todos: newTodos });
      event.target.value = "";
    };
  };

  deleteOne = clickedId => event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.id === clickedId) {
          return false;
      }

      return true;
    });

    this.setState({ todos: newTodos });
  };

  deleteAll = event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.completed === true) {
          return false;
      }

      return true;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    const allHandlingProps = {
      toggleCompleted: this.toggleCompleted,
      addTodo: this.addTodo,
      deleteOne: this.deleteOne,
      deleteAll: this.deleteAll,
      completed: todos.filter(todo => !todo.completed).length
    };

    return (
      <section className="todoapp">
        <Switch>
          <Route path="/active" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => !todo.completed)} />} />
          <Route path="/completed" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => todo.completed)} />} />
          <Route path="/" render={props => <TodoList {...props} {...allHandlingProps} todos={todos} />} />
        </Switch>
      </section>
    );
  };
};

export default App;