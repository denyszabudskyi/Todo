import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({todos}) => {

    const element = todos.map((item) => {
        return (
            <li>
                {console.log({...item})}
                <TodoListItem { ...item }/>
            </li>
        );
    });

    return (
        <ul>
            {element}
        </ul>
    );
};

export default TodoList;