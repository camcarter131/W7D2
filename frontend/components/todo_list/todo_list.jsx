import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from  './todo_form';

class TodoList extends React.Component {
    render () {
        const { todos, receiveTodo } = this.props;
        
        return (
            <>
                <ul>{todos.map(todo => <TodoListItem key={ todo.id } todo={todo} />)}</ul>
                <TodoForm receiveTodo={ receiveTodo }/>
            </>
        );
    }
}

export default TodoList; 
