export const TodoListItem = ({todos, onDelete, deleting}) => {
    return <ul>
        {todos.map(todo => 
            <li key={todo.id}>
                {todo.name}
                <button onClick={() => onDelete(todo.id)}>
                    {deleting ? 'Deleting...' : 'Delete'}
                </button>
            </li>)}
    </ul>
};