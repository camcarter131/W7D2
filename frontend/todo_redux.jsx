import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from "./reducers/selector";



document.addEventListener("DOMContentLoaded", () => {
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
    
    const store = configureStore();
    window.store = store;
    ReactDOM.render( <Root store={ store }/>, document.getElementById('root'));
});