import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/AppHeader";
import TodoList from "./components/TodoList";
import SearchPanel from "./components/SearchPanel";

const App = () => {

    const todoData = [
        {label: 'Dring Cofee', important: false},
        {label: 'Cofee', important: true},
        {label: 'Dring', important: false}
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData} />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
