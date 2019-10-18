import React from 'react';
import Todo from './Todo';

class App extends React.Component{
    render(){
        return (
            <div className = "container text-center">
                <h1>Todo App</h1>
                <Todo />
            </div>
        )
    }
}

export default App;