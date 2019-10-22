import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodosCount from './TodosCount';
import Constants from '../constants'
import FilterLinks from './FilterLinks';

const ALL = Constants.ALL;
const ACTIVE = Constants.ACTIVE;
const COMPLETED = Constants.COMPLETED;

class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todos : [],
            currentFilter : ALL,
            searchQuery : ''
        };
        this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
        this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleTodoSearch = this.handleTodoSearch.bind(this);
    }

    handleNewTodoItem(){
        this.setState(function(state){
            let todoItem = {
                todo : state.searchQuery,
                id : Date.now().toString(),
                completed : false
            }
            let todos = state.todos.concat(todoItem);
            return {
                todos : todos,
                searchQuery : ''
            }
        })
    }

    handleDeleteBtnClick(event){
        let id = event.target.value;
        this.setState(function(state){
            let todos = state.todos;
            let index = null;
            let todosLen = todos.length;
            for(let i =0; i< todosLen; i++){
                if(todos[i].id === id){
                    index = i;
                }
            }
            todos = todos.slice(0, index).concat(todos.slice(index+1));
            return {
                todos: todos
            }
        });
    }

    handleCheckBoxClick(event){
        let id = event.target.value;
        this.setState(function(state){
            let todos = state.todos;
            let index = null;
            let todosLen = todos.length;
            for(let i =0; i< todosLen; i++){
                if(todos[i].id === id){
                    index = i;
                }
            }
            todos = (todos.slice(0, index).concat([{todo : todos[index].todo, id : todos[index].id, completed : !todos[index].completed }]).concat(todos.slice(index+1)));
            return {
                todos: todos
            }
        });
    }

    handleFilterChange(event, currentFilter){
        event.preventDefault();
        this.setState(function(){
            return{
                currentFilter: currentFilter
            }
        })
    }

    handleTodoSearch(searchQuery){
        this.setState(function(){
            return {
                searchQuery : searchQuery
            }
        });
    }

    filterTodos(){
        let todos = this.state.todos;
        let todosLen = todos.length;
        let currentFilter = this.state.currentFilter;
        let filteredTodos = [];
        let searchQuery = this.state.searchQuery;

        for(let i = 0; i < todosLen; i++){
            if(searchQuery && todos[i].todo.indexOf(searchQuery) === -1){
                continue;
            }
            if(currentFilter === ACTIVE && todos[i].completed){
                continue;
            }
            if(currentFilter === COMPLETED && !todos[i].completed){
                continue;
            }
            filteredTodos.push(todos[i]);
        }

        return filteredTodos;
    }

    render(){
        let todos = this.filterTodos();
        return (
            <div>
                <TodoForm todoText = {this.state.searchQuery} onTodoSearch = {this.handleTodoSearch} onNewTodoItem = {this.handleNewTodoItem} />
                <FilterLinks currentFilter = {this.state.currentFilter} onFilterChange = {this.handleFilterChange}/>
                <TodoList 
                    todos = {todos} 
                    onDeleteBtnClick = {this.handleDeleteBtnClick} 
                    onCheckBoxClick = {this.handleCheckBoxClick}
                />
                <TodosCount todosCount = {todos.length} />
            </div>
        );
    }
}

export default Todo;