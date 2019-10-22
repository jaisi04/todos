import React from 'react';
import TodoItem from './TodoItem';

let TodoList = function(props){
    let todoList = [];
    props.todos.forEach(function(ele, i){
        todoList.push(<TodoItem 
            todoItem = {ele}
            key = {ele.id}
            onDeleteBtnClick = {props.onDeleteBtnClick}
            onCheckBoxClick = {props.onCheckBoxClick}
        />);
    });

    return (
        <ul className="list-group">
            {todoList}
        </ul>
    );
}

export default TodoList;