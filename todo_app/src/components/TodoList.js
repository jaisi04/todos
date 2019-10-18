import React from 'react';
import TodoItem from './TodoItem';

let TodoList = function(props){
    let todoList = [];
    props.todos.forEach(function(ele, i){
        todoList.push(<TodoItem 
            todo = {ele} 
            index = {i} 
            onDeleteBtnClick = {props.onDeleteBtnClick}
        />);
    });

    return (
        <ul className="list-group">
            {todoList}
        </ul>
    );
}

export default TodoList;