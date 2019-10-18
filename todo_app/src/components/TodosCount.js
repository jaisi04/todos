import React from 'react';

let TodosCount = function(props){
    return(
        <div className="card card-body bg-light">
            <h5>Total todos: {props.todosCount}</h5>
        </div>
    );
}

export default TodosCount;