import merge from 'lodash/merge';
import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions"

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = merge({}, state);
    switch(action.type) {
        case RECEIVE_TODOS: 
            for (let todo of action.todos) {
                nextState[todo.id] = todo;
            }
            return nextState;
        
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        
        default:
            return state;
    }
};

export default todosReducer;




// const initialState = {
//     1: {
//         id: 1,
//         title: 'wash car',
//         body: 'with soap',
//         done: false
//     },
//     2: {
//         id: 2,
//         title: 'wash dog',
//         body: 'with shampoo',
//         done: true
//     },
// };