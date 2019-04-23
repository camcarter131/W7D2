import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from  './todo_form';

class TodoList extends React.Component {
    render () {
        const { todos } = this.props;
        
        return (
            <>
                <ul>{todos.map(todo => <TodoListItem todo={todo} />)}</ul>
                <TodoForm />
            </>
        );
    }
}

export default TodoList; 
