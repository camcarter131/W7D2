import React from 'react';

class TodoListItem extends React.Component {

    render () {
        const { id, title } = this.props.todo;
        return <li key={id}>{title}</li>;
    }
}

export default TodoListItem;