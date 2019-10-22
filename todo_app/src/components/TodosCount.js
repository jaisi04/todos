import React from 'react';
const MARGIN = {marginTop: "1%"}
let TodosCount = function(props){
    return(
        <div className=" card card-body bg-light" style ={MARGIN}>
            <h5>Total todos: {props.todosCount}</h5>
        </div>
    );
}

export default TodosCount;