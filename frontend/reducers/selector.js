export const allTodos = (state) => {
    let todos_arr = Object.keys(state.todos).map((key) => state.todos[key]);
    return todos_arr;
};

