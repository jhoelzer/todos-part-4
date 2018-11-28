import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class TodoHeader extends Component {
    state = {
        title: ""
    };

    handleChange =  evenet => {
        this.setState({
            title: event.target.value
        })
    };

    addTodo = event => {
        const { addTodo } = this.props;
        const { title } = this.state;

        if (event.keyCode === 13) {
            addTodo(title);
            this.setState({
                title: ""
            });
        };
    };

    render() {
        const { title } = this.state;
        return (
            <header className="header">
                <h1>Todos</h1>
                <input className="new-todo" placeholder="What needs doing?" value={title} onKeyDown={this.addTodo} onChange={this.handleChange} autoFocus />
            </header>
        );
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: id => dispatch(addTodo(title))
    }
};

export default connect(null, mapDispatchToProps)(TodoHeader);