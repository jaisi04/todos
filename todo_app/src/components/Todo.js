import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodosCount from './TodosCount';
import {ALL, ACTIVE, COMPLETED} from '../constants'
import FilterLinks from './FilterLinks';

class Todo extends React.Component{
    state = {
        todos : [],
        currentFilter : ALL,
        searchQuery : ''
    };

    handleNewTodoItem = () => {
        this.setState(({searchQuery, todos}) => {
            const todoItem = {
                todo : searchQuery,
                id : Date.now().toString(),
                completed : false
            }
            todos = [...todos, todoItem];
            return {
                todos,
                searchQuery : ''
            }
        })
    }

    handleDeleteBtnClick = (event) => {
        const id = event.target.value;
        this.setState(({todos}) => {
            todos = todos.filter(({id:todoId}) => {
                return (todoId !== id);
            });
            return {
                todos
            }
        });
    }

    handleCheckBoxClick = (event) => {
        const id = event.target.value;
        this.setState(({todos}) => {
            const index = todos.findIndex(({id:todoId}) => {
                return todoId === id;
            });
            const {todo, completed} = todos[index];
            todos = [
                    ...todos.slice(0, index),
                    {
                        todo, 
                        id, 
                        completed : !completed 
                    },
                    ...todos.slice(index+1)
            ];
            return {
                todos
            }
        });
    }

    handleFilterChange = (event, currentFilter) => {
        event.preventDefault();
        this.setState(() => {
            return{
                currentFilter
            }
        })
    }

    handleTodoSearch = (searchQuery) => {
        this.setState(() => {
            return {
                searchQuery
            }
        });
    }

    filterTodos(){
        const {
            todos,
            currentFilter,
            searchQuery
         } = this.state;

        const filteredTodos = todos.filter(({todo, completed}) => {
            if((searchQuery && todo.indexOf(searchQuery) === -1) ||
                (currentFilter === ACTIVE && completed) ||
                (currentFilter === COMPLETED && !completed)){
                    return false;
            }
            return true;
        });

        return filteredTodos;
    }

    render(){
        const {
            handleTodoSearch,
            handleNewTodoItem,
            handleFilterChange,
            handleDeleteBtnClick,
            handleCheckBoxClick,
            state : {searchQuery, currentFilter}
        } = this;
        const todos = this.filterTodos();
        
        return (
            <div>
                <TodoForm 
                    todoText = {searchQuery} 
                    onTodoSearch = {handleTodoSearch} 
                    onNewTodoItem = {handleNewTodoItem} 
                />
                <FilterLinks currentFilter = {currentFilter} onFilterChange = {handleFilterChange}/>
                <TodoList 
                    todos = {todos} 
                    onDeleteBtnClick = {handleDeleteBtnClick} 
                    onCheckBoxClick = {handleCheckBoxClick}
                />
                <TodosCount todosCount = {todos.length} currentFilter = {currentFilter} />
            </div>
        );
    }
}

export default Todo;