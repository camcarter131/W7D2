import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <form action={alert("Dean sux at bball")}>
                <label>Title:
                    <input type="text"/>
                </label>
                <label>Body:
                    <textarea></textarea>
                </label>
                <button>Create Todo!</button>
            </form>
        );
    }
}

export default TodoForm; 