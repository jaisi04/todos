import React from 'react';

const TodoItem = ({todoItem :{todo, id, completed} = {}, onCheckBoxClick, onDeleteBtnClick}) => {
    return(
        <li className = "list-group-item">
            <h4>
                <input 
                    type = "checkbox" 
                    className = "float-left" 
                    checked = {completed}
                    onChange = {onCheckBoxClick}
                    value = {id}
                />
                {todo}
                <button 
                    className="btn btn-danger float-right"
                    onClick = {onDeleteBtnClick}
                    value = {id}
                >
                Delete
                </button>
            </h4>
        </li>
    );
}

export default TodoItem;