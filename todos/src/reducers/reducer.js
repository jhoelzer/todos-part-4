import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS} from '../actions/index.js';
import todoList from '../todos.json';
import { combineReducers } from 'redux';

const initialState = {
    todoList
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    todo.id === action.id ? todo.completed = !todo.completed : null
                    return todo;
                })
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [state.todos, { title: action.title, completed: false, id: action.keyNumber, userID: 1 }]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case CLEAR_COMPLETED_TODOS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.completed === false)
            }
        default:
            return state;
    }
};

export default todoReducer;