import changeTodo from './todo';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    todoList: changeTodo,
});

export default allReducers;