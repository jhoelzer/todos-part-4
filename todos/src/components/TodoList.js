import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import todoList from '../todos.json';
import { NavLink } from "react-router-dom";

class TodoList extends Component {
    state = { todos: todoList };

    render() {
        const { todos } = this.props;
    
        return (
            <React.Fragment>
                <header className="header">
                    <h1>Todos</h1>
                    <input className="new-todo" placeholder="What needs doing?" onKeyDown={this.props.addTodo} autoFocus />
                </header>

                <section className="main">
                    <ul className="todo-list">
                        {todos.map(todo =>
                            <TodoItem 
                                key={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                toggleCompleted={this.props.toggleCompleted(todo.id)}
                                deleteOne={this.props.deleteOne(todo.id)}
                            />
                        )}
                    </ul>
                </section>

                <footer className="footer">
                    <span className="todo-count"><strong>{this.props.completed}</strong> items(s) left</span>
                    <ul className="filters">
                        <li><NavLink exact to="/" activeClassName="selected">All</NavLink></li>
                        <li><NavLink exact to="/active" activeClassName="selected">Active</NavLink></li>
                        <li><NavLink exact to="/completed" activeClassName="selected">Completed</NavLink></li>
                    </ul>
                    <button className="clear-completed" onClick={this.deleteAll}>Clear Completed</button>
                </footer>
            </React.Fragment>
        );
    };
};

export default TodoList;