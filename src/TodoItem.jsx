import React from 'react';

const TodoItem = ({ todo, completed, onToggle, onDelete }) => {
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={onToggle} />
            {todo}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}

export default TodoItem;