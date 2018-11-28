import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteAll } from '../actions/index';

class TodoFooter extends Component {
    render() {
        const { completed, deleteAll, filter } = this.props;
        return (
            <footer className="footer">
                    <span className="todo-count"><strong>{this.props.completed}</strong> items(s) left</span>
                    <ul className="filters">
                        <li><Link to="/" className={filter === "/" ? "selected" : ""}>All</Link></li>
                        <li><Link to="/active" className={filter === "/active" ? "selected" : ""}>Active</Link></li>
                        <li><Link to="/completed" className={filter === "/completed" ? "selected" : ""}>Completed</Link></li>
                    </ul>
                    <button className="clear-completed" onClick={deleteAll}>Clear Completed</button>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state.todoList
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteAll: () => dispatch(deleteAll())
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);