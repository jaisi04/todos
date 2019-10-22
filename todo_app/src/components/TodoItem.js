import React from 'react';

let TodoItem = function(props){
    let todoItem = props.todoItem;
    return(
        <li className = "list-group-item">
            <h4>
                <input 
                    type = "checkbox" 
                    className = "float-left" 
                    checked = {todoItem.completed}
                    onChange = {props.onCheckBoxClick}
                    value = {todoItem.id}
                />
                {todoItem.todo}
                <button 
                    className="btn btn-danger float-right"
                    onClick = {props.onDeleteBtnClick}
                    value = {todoItem.id}
                >
                Delete
                </button>
            </h4>
        </li>
    );
}

export default TodoItem;