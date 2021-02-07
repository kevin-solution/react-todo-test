import React from 'react';
import './index.css';

const todo = (props) => {
    const { label } = props;

    return (
        <div data-testid="todo-item" className="todo-item">
            {label}
        </div>
    )
}

export default todo;
