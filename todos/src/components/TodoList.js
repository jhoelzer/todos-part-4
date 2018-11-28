import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoHeader from './TodoHeader.js';
import TodoFooter from './TodoFooter.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {

    render() {
        const { todos, addTodo } = this.props;
    
        return (
            <React.Fragment>
                <TodoHeader addTodo={addTodo} />
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
                <TodoFooter completed={this.props.completed} deleteAll={this.props.deleteAll} filter={this.props.location.pathname} />
            </React.Fragment>
        );
    };
};

export default TodoList;