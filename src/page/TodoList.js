import React from "react";
import TodoItem from "../components/todo";

const TodoList = (props) => {
    const { todos } = props;

    return (
        <div data-testid="todo-list" className="todo-list">
            {todos &&
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        label={todo.name}
                    />
                ))}
        </div>
    );
};

export default TodoList;
