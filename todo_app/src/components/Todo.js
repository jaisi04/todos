import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodosCount from './TodosCount';

class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todos : []
        };
        this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
        this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
    }

    handleNewTodoItem(todo){
        this.setState(function(state){
            let todos = state.todos.concat(todo);
            return {
                todos : todos
            }
        })
    }

    handleDeleteBtnClick(event){
        let index = Number(event.target.value)
        this.setState(function(state){
            let todos = state.todos;
            todos = todos.slice(0, index).concat(todos.slice(index+1));
            return {
                todos: todos
            }
        });
    }

    render(){
        let todos = this.state.todos;
        return (
            <div>
                <TodoForm onNewTodoItem = {this.handleNewTodoItem} />
                <TodoList 
                    todos = {todos} 
                    onDeleteBtnClick = {this.handleDeleteBtnClick} 
                />
                <TodosCount todosCount = {todos.length} />
            </div>
        );
    }
}

export default Todo;