import React from 'react';

let TodoItem = function(props){
    
    return(
        <li className = "list-group-item">
        <h4>
            {props.todo}
            <button 
                className="btn btn-danger float-right"
                onClick = {props.onDeleteBtnClick}
                value = {props.index}
            >
            Delete
            </button>
        </h4>
        </li>
    );
}

export default TodoItem;